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
    createUser: (req, res) => {
        const body = req.body;
        const salt = getSaltSync(10);
        body.password = hashSync(body.password, salt);
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