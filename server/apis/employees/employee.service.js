const config = require('../../config/database');

/*
*******Exports All Database function and maintain here
*/
module.exports = {
    create: (data, callback) => {
        config.query(`INSERT INTO employees(id, employee_id, department_id, section_id, fullname, lastname, birth_date, age, mental_status_id, gender_id, join_date, address1, address2, city, province, country, remark, status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,>)`, 
        [
            data.id,
            data.employee_id, 
            data.department_id, 
            data.section_id, 
            data.fullname, 
            data.lastname, 
            data.birth_date, 
            data.age, 
            data.mental_status_id, 
            data.gender_id, 
            data.join_date, 
            data.address1, 
            data.address2, 
            data.city, 
            data.province, 
            data.country, 
            data.remark, 
            data.status
        ],
        (error, results, fields) => {
            if(error) {
               return callback(error);
            }
            return callback(null, results)
        });
    },
    getEmployees: callback => {
        config.query(
            `SELECT id, employee_id, department_id, section_id, fullname, lastname, birth_date, age, mental_status_id, gender_id, join_date, address1, address2, city, province, country, remark, status from employees`, 
            [],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getByEmployeeId: callback => {
        config.query(
            `SELECT id, employee_id, department_id, section_id, fullname, lastname, birth_date, age, mental_status_id, gender_id, join_date, address1, address2, city, province, country, remark, status FROM employees WHERE id = ?`, 
            [id],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    updateEmployee: (data, callback) => {
        config.query(
            `UPDATE SET employee_id=?, department_id=?, section_id=?, fullname=?, lastname=?, birth_date=?, age=?, mental_status_id=?, gender_id=?, join_date=?, address1=?, address2=?, city=?, province=?, country=?, remark=?, status=? FROM employees WHERE id=?`, 
            [
                data.employee_id, 
                data.department_id, 
                data.section_id, 
                data.fullname, 
                data.lastname, 
                data.birth_date, 
                data.age, 
                data.mental_status_id, 
                data.gender_id, 
                data.join_date, 
                data.address1, 
                data.address2, 
                data.city, 
                data.province, 
                data.country, 
                data.remark, 
                data.status,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    delEmployee: (data, callback) => {
        config.query(`DELETE FROM employees WHERE id = ?`,
        [data.id],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results[0]);
        }
        );
    },
    
}
