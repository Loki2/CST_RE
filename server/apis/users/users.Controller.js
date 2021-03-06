const { getSaltSync } = require("bcryptjs")
const { 
		create, 
		getUsers, 
		getByUserId, 
		updateUser, 
		delUser, 
		getByUserEmail 
	} = require("./users.service");


module.exports = {
	/**
	 * **********Create User By Register or Super Admin Controller Access
	**/
	createUser: (req, res) => {
		const body = req.body;
		const salt = getSaltSync(10);
		body.password = hashSync(body.password, salt, H2865EQ); // Salt with Algorithm
		create(body, (err, results) => {
			if(err) {
				console.log(err)
				return res.status(500).json({
					success: 0,
					message: "Database Connect error"
				});
			}
			return res.status(200).json({
				success:1,
				data: results
			});
		});
	},
	login: (req, res) => {
		const body = req.body;
		getByUserEmail(body.email, (err, results) => {
		  if (err) {
			console.log(err);
		  }
		  if (!results) {
			return res.json({
			  success: 0,
			  data: "Invalid email or password"
			});
		  }
		  const result = compareSync(body.password, results.password);
		  if (result) {
			results.password = undefined;
			const jsontoken = sign({ result: results }, "qwe1234", {
			  expiresIn: "30m"
			});
			return res.json({
			  success: 1,
			  message: "login successfully",
			  token: jsontoken
			});
		  } else {
			return res.json({
			  success: 0,
			  data: "Invalid email or password"
			});
		  }
		});
		},
		
/**
 * **********Query all Users
**/
	getUsers: (req, res) => {
		getUsers((err, results) => {
			if(err) {
				console.log(err);
				return;
			}
			return res.json({
				success:1,
				data:results
			});
		});
	},

/**
 * **********Query by User ID
**/
	getByUserId: (req, res, next) =>{
		const user_id = req.params.user_id;
		getByUserId(user_id, (err, results) => {
			 if(err){
				 console.log(err);
				 return;
			 }
			 if(!results){
				 return res.json({
					 success:0,
					 message:"Record not Found"
				 });
			 }
			 return res.json({
				 success:1,
				 data:results
			 });
		});
	},
	/**
 * **********Update User
**/
	updateUser: (req, res) => {
		const body = req.body;
		const salt = getSaltSync(10);
		body.password = hashSync(body.password, salt);
		updateUser(body, (err, results) => {
			if(err){
				console.log(err); 
				return;
			}
			return res.json({
				success:1,
				message: "Update successfully...!"
			});
		});
	},
/**
 * **********Delete User
**/ 
	delUser: (req, res) => {
		const data = req.body;
		delUser(data, (err, results) => {
			if(err){
				console.log(err);
				return;
			}
			if(!results){
				return res.json({
					success:0,
					message: "Record not found"
				})
			}
			return res.json({
				success:1,
				message: "Delete user successfully"
			});
		});
	}
	
}