const config = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        config.query(`INSERT INTO 
                clients(
                    client_name,
                    company_name,
                    cargo,
                    client_address1,
                    client_address2,
                    city,
                    province,
                    country, 
                    client_email, 
                    client_contact, 
                    create_by, 
                    client_status
                 ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                 [
                     data.client_name,
                     data.company_name,
                     data.cargo,
                     data.client_address1,
                     data.client_address2,
                     data.city,
                     data.province,
                     data.country,
                     data.client_email,
                     data.client_contact,
                     data.create_by,
                     data.client_status
                 ],
                 (error, results, fields) => {
                    if(error) {
                        return callback(error)
                    } 
                    return callback(null, results)
                }
         );
    },
    getClients: callback => {
        config.query(`SELECT 
                    client_id, 
                    client_name,
                    company_name,
                    cargo,
                    client_address1,
                    client_address2,
                    city,
                    province,
                    country, 
                    client_email, 
                    client_contact, 
                    create_by, 
                    client_status 
                    FROM clients`,
                    [],
                    (error, results, fields) => {
                        if(error) {
                            return callback(error);
                        }
               return callback(null, results);
             }
        );
    },
    getByClientId: (client_id, callback) => {
        config.query(`SELECT 
                    client_id, 
                    client_name,
                    company_name,
                    cargo,
                    client_address1,
                    client_address2,
                    city,
                    province,
                    country, 
                    client_email, 
                    client_contact, 
                    create_by, 
                    client_status 
                    FROM clients WHERE client_id = ?`,
                    [client_id],
                    (error, results, fields) => {
                        if(error) {
                            return callback(error);
                        }
               return callback(null, results);
             }
        );
    },
    updateClient: (data, callback) => {
        config.query(`UPDATE clients SET 
                        client_name = ?,
                        company_name = ?,
                        cargo = ?,
                        client_address1 = ?,
                        client_address2 = ?,
                        city = ?,
                        province = ?,
                        country = ?, 
                        client_email = ?, 
                        client_contact = ?, 
                        create_by = ?, 
                        client_status = ?
                WHERE client_id = ?`, 
                [
                    data.client_name,
                    data.company_name,
                    data.cargo,
                    data.client_address1,
                    data.client_address2,
                    data.city,
                    data.province,
                    data.country,
                    data.client_email,
                    data.client_contact,
                    data.create_by,
                    data.client_status,
                    data.client_id
                ],
                (error, results, fields) => {
                    if(error) {
                        return callback(error)
                    } 
                return callback(null, results)
            }
        );
    },
    delClient: (data, callback) => {
        config.query(`DELETE FROM clients WHERE client_id = ?`,
        [data.client_id],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results[0]);
        }
        );
    }
}