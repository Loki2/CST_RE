require('dotenv/config');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');
const router = express.Router();
//const config = require('../config/database');
const { fakeDB } = require('../config/fakeDatabase');


const { isAuth } = require('../functions/isAuth');
const { createAccessToken, 
        createRefreshToken,
        sendAccessToken,
        sendRefreshToken
    } = require('../functions/roles');
/******TO DO:********/
// 1. Register a users
// 2. Log user in 
// 3. Log user Out
// 4. Setup a Protected routes.
// 5. Get a new accesstoken with a refresh token -> send to user email


/*
******Use express middleware for easier cookie handling
*/ 
router.use(cookieParser());
/*
******Use frontend url to make credentials 
*/ 
router.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

/*
******Needed to be able to read body data
*/ 
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//router.use(verify.isAuth(refreshtoken)); // How to Refresh others's Token


/*
******Create user login 
*/ 
router.post('/login', async (req, res, next) => {
    // res.send('Users Credential GET/ Request now')
    const { email, password } = req.body;

    try{
        //1. Find user in database. if not exist then send error
        const user = fakeDB.find(user => user.email === email);
        if(!user) throw new Error('User does not exist');
        //2. Compare crypt password and see if it checks out. send errors if not
        const valid = await compare(password, user.password);
        if(!valid) throw new Error('ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ, ກາລູນາກວດເບີ່ງຄືນ...!');
        //3. Create Refresh_Token and accesstoken

        const accesstoken = createAccessToken(user.id);
        const refreshtoken = createRefreshToken(user.id);
        //4. Put The refreshtoken in the database
        user.refreshtoken = refreshtoken;
        console.log(fakeDB);
        //5. Send token, RefreshToken as a cookie and accesstoken as a regular response
        sendRefreshToken(res, refreshtoken);
        sendAccessToken(res, req, accesstoken);

    }catch(err){
        res.send({
            error: `${error.message}`
        })
    }
})

/*
******Create user registrtions
*/ 
router.post('/register', async (req, res, next) => {
    // res.send('This is users credential');
    const { email, password } = req.body;
    try{
        //1. Check if user already exist
        const user = fakeDB.find(user => user.email === email);
        if(user) throw new Error('User already exist');
         //2. Check if not user exist, hash the password
        const hashPwd = await hash(password, RS256);//RS256 is jwt algorithm
        //3. Insert the user in database
        fakeDB.push({
            id: fakeDB.length,
            email,
            password: hashPwd
        });
        res.send({ message: 'User Created...!'})
        console.log(fakeDB);
    }catch(err){
        res.send({
            error: `${err.message}`
        });
    }
});

router.post('/logout', (_req, res, next) => {
    res.clearCookie('refreshtoken');
    return res.send({
        message:'Log Out',
    })
});

router.post('/protected', async (req, res, next) => {
    try{
        const userId = isAuth(req);
        if(userId !== null) {
            res.send({
                data: 'This is Portected Data.'
            })
        }
    }catch (err){
        res.send({
            error: `${err.message}`,
        })
    }
})

module.exports = router;