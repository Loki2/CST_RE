const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const compression = require('compression'); //Just need to install this packages
const path = require('path');
//const config = require('./config/database');
// const { checkToken } = require('./auth/token_validation');


/*
 **** Users Credential Authentication
 */
//const usersCredential = require('./routes/users')

/*
 **** Check If Production mode
 */
const dev = app.get('env') !== 'production';
if(!dev) {
	app.disable('x-powered-by');
	// app.use(compression());
	app.use(morgan('common'));

	app.use(express.static(path.resolve(__dirname, 'client/build')));

	app.use('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
	})
}

if(dev) {
	app.use(morgan('dev'));
}


/*
 **** Import All Routes
 */
const allowCode = require('./apis/allowcode/allowcode.Router');
const serviceCategory = require('./apis/service_cats/service_category');
const serviceType = require('./apis/service_type/service_type');
const clients = require('./apis/clients/client.Router');
const userRouter = require('./apis/users/users.Router');
const employeeRoute = require('./apis/employees/employees.Router');
const deptRoute = require('./apis/depts/deptype.Router');
/*
 **** Use Morgan For info each routes memory in the cache
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

/*
 **** Middle ware Authorization  here
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


/*
 **** Users routes Credential Authentication
 */
app.use('/users', userRouter);



/*
 **** Import All Routes
 */
app.use('/allowCode', allowCode);
app.use('/serviceCategory', serviceCategory);
app.use('/serviceType', serviceType);
app.use('/clients', clients);
app.use('/employees', employeeRoute);
app.use('/depts', deptRoute);



/*
 **** Use error handling Routes
 */
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;