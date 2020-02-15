const { create, getEmployees, getByEmployeeId, updateEmployee, delEmployee } = require('./employee.service');

module.exports = {
    createEmpolyee: async (req, res, next) => {
        const body = await req.body;
        create(body, (err, results) => {
           if(err) {
                console.log(err);
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

    getEmployees: async (req, res, next) => {
        getEmployees((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results
            }); 
        });
    },

    getByEmployeeId: async (req, res, next) => {
        const id = await req.params.id;
        getByEmployeeId(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results
            }); 
        });
    },

    updateEmployee: async (req, res, next) => {
        const data = await req.body;
        updateEmployee(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message: "Update Successfully...!",
                data: results
            });
        })
    },

    delEmployee: async (req, res, next) => {
        const data = await req.params.id;
        delEmployee(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "Record not found"
                });
            }
            return res.json({
                success:1,
                message: "Delete successfully"
            });
        });
    },

    // getplatform: async (req, res, next) => {

    // }
}