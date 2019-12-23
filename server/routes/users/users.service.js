const config = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        config.query(`INSERT INTO users(user_id, employee_id, username, email, password, confirm_password, role_id) values(?,?,?,?,?,?,?)`,
        [
            data.user_id,
            data.employee_id,
            data.username,
            data.email,
            data.password,
            data.confirm_password,
            data.role_id
        ],
        (error, results, fields) => {
            if(error) {
               return callback(error);
            }
            return callback(null, results)
        });
    },
    getUser: callback => {
        config.query(
            `SELECT user_id,employee_id, username, email, password, confirm_password, role_id from users`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getByUserId: (id, callback) => {
        config.query(
            `SELECT user_id,employee_id, username, email, password, confirm_password, role_id from users WHERE user_id=?`,
            [user_id],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },
    updateUser: (data, callback) => {
        config.query(
            `UPDATE users SET employee_id=?, username=?, email=?, password=?, confirm_password=?, role_id=? from users WHERE user_id=?`,
            [
                data.employee_id,
                data.username,
                data.email,
                data.password,
                data.confirm_password,
                data.role_id,
                data.user_id,
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },
    delUser: (id, callback) =>{
        config.query(`DELETE FROM users WHERE user_id = ?`,
        [data.user_id],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results[0]);
        }
        )
    }
};