const {create, getAllJobs, getByJobId, updateCompanyJob, delCompanyJob} = require('./jobcompany.service');

module.exports = {
		createJob : async (req, res, next) => {
			const body = await req.body;
			create(body, (error, results) => {
				if(error) {
					console.log(error);
					return res.status(500).json({
						success: 0,
						message: 'Database Connect Error.'
					});
				}
				return res.status(200).json({
					success: 1,
					data: results
				});
				next();
			});
		}

}