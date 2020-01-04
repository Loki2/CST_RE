const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const config = require('./config/database');


/*
 **** Users Credential Authentication
 */
//const usersCredential = require('./routes/users')


/*
 **** Import All Routes
 */
const allowCode = require('./apis/allowcode/allowcode.Router');
const serviceCategory = require('./apis/service_category');
const serviceType = require('./apis/service_type');
const clients = require('./apis/client');
const employees = require('./apis/employees');
const deptype = require('./apis/dept_type');
const userRouter = require('./apis/users/users.Router')
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
 **** Use All Routes
 */
app.use('/allowCode', allowCode);
app.use('/serviceCategory', serviceCategory);
app.use('/serviceType', serviceType);
app.use('/clients', clients);
app.use('/employees', employees);
app.use('/depts', deptype);



/*
 **** Use error handling Routes
 */
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;