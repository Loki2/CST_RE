const config = require("../../config/database");
 module.exports = {
     create: (data, callback) => {
       config.query(
           `INSERT INTO allow_code(allow_code_title, allow_code_desc) VALUES(?,?)`,
            [
                data.allow_code_title,
                data.allow_code_desc
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                } 
                return callback(null, results)
            }
        );
     },
     getAllowCode: callback => {
         config.query(
             `SELECT allow_code_id, allow_code_title, allow_code_desc from allow_code`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
     },
     getByAllowCodeId: (allow_code_id, callback) => {
        config.query(
            `SELECT allow_code_id, allow_code_title, allow_code_desc from allow_code WHERE allow_code_id = ?`,
            [allow_code_id],
            (error, results, fields) => {
                if(error) {
                return callback(error);
                }
                return callback(null, results);
            }
        );
     },
    updateAllowCode: (data, callback) => {
        config.query(
            `UPDATE allow_code SET allow_code_title=?, allow_code_desc=? WHERE allow_code_id=?`,
            [
                data.allow_code_title,
                data.allow_code_desc,
                allow_code_id
            ],
            (error, results, fields) => {
            if(error) {
                return callback(error)
            } 
            return callback(null, results)
            }
        );
    },
    delAllowCode: (data, callback) => {
       config.query(`DELETE FROM allow_code WHERE allow_code_id = ?`,
        [data.allow_code_id],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results[0]);
        }
       );
    } 
 }