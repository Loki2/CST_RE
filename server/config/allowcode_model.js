const db = require('./database');

let allowcode = {};

allowcode.all = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM allow_code`, (err, results) => {
            if(err){
                return reject(err);
            }else{
                return resolve(results);
            }
        });
    });
};


module.exports = allowcode;