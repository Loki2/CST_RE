const config = require('../../config/database');
/*
*******Exports All Database function and maintain here
*/
module.exports = {
    create: (data, callback) => {
       config.query(`INSERT INTO deparment_types(dep_type_id, dep_type_code, dep_type_lao, dep_type_eng) VALUES(?,?,?,?)`, 
        [
            data.dep_type_id,
            data.dep_type_code,
            data.dep_type_lao,
            data.dep_type_eng
        ],
        (error, results, fields) => {
            if(error) {
               return callback(error);
            }
            return callback(null, results)
        });
    },
    getDepType: callback => {
       config.query(`SELECT dep_type_id, dep_type_code, dep_type_lao, dep_type_eng FROM deparment_types`,
        [],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results);
        });
    },
    getByDepTypeId: callback => {
       config.query(`SELECT dep_type_id, dep_type_code, dep_type_lao, dep_type_eng FROM deparment_types WHERE dep_type_id=?`,
        [dep_type_id],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results);
        });
    },
    updateDepType: (data, callback) => {
       config.query('UPDATE SET dep_type_id=?, dep_type_code=?, dep_type_lao=?, dep_type_eng=? FROM deparment_types WHERE dep_type_id=?', 
        [
            data.dep_type_id,
            data.dep_type_code,
            data.dep_type_lao,
            data.dep_type_eng
        ],
        (error, results, fields) => {
            if(error) {
            return callback(error);
            }
            return callback(null, results)
        }); 
    },
    delDepType: (data, callback) => {
       config.query(`DELETE FROM deparment_types WHERE dep_type_id=?`,
            [data.dep_type_id],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    }
}

