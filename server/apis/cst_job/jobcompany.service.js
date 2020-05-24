const config = require('../../config/database');
module.exports = {
  //Callback function is used for getting return database to controller
  //INSERT QUERY 
    create: (data, callback ) => {
       config.query(
        `INSERT INTO company_jobs(client_id, company_job_name, company_job_location, company_job_status, remark) VALUES(?,?,?,?,?)`,
         [
          data.client_id,
          data.company_job_name,
          data.company_job_location,
          data.company_job_status,
          data.remark
         ],
         (error, results, fields) => {
          if(error) {
           return callback(error)
          }
          return callback(null, results)
         }
        );
    },
	 //Query Get All Company Job From Database 
  	getAllJobs: callback => {
    	config.query(`SELECT 
                    company_job_id,
                    client_id, 
                    company_job_name, 
                    company_job_location, 
                    company_job_status, 
					remark
					FROM company_jobs`,
                    [],
                    (error, results, fields) => {
                      if(error) {
                        return callback(error);
                      }
                return callback(null, results);
            }
      );
  },
   //Query Get By Company Job ID From Database 
  	getByJobId: (company_job_id, callback) => {
		config.query(`SELECT 
					company_job_id,
					client_id, 
					company_job_name, 
					company_job_location, 
					company_job_status, 
					remark 
					FROM company_jobs WHERE company_job_id = ? `, //&& COUNT(*)
				[company_job_id],
				(error, results, fields) => {
				if(error) {
					return callback(error);
				}
				return callback(null, results);
			}
		);
  },
   //Query Update By Company Job ID To Database 
  	updateCompanyJob: (data, callback) => {
		config.query(`UPDATE company_jobs SET
						client_id=?, 
						company_job_name=?, 
						company_job_location=?, 
						company_job_status=?, 
						remark=?
					WHERE company_job_id=?`,
					[
						data.client_id,
						data.company_job_name,
						data.company_job_location,
						data.company_job_status,
						data.remark
					   ],
					   (error, results, fields) => {
						if(error) {
							return callback(error)
						} 
					return callback(null, results)
				}
		);
	},
	   //Query Delete By Company Job ID From Database 
	delCompanyJob: (data, callback) => {
		config.query(`DELETE FROM company_jobs WHERE company_job_id = ?`,
			[data.company_job_id],
			(error, results, fields) => {
				if(error) {
					return callback(error);
				}
				return callback(null, results[0]);
			}
		);
	}

}    