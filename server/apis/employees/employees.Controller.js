const {
    create, 
    getEmployees, 
    getByEmployeeId, 
    updateEmployee, 
    delEmployee
   } = require('./employee.service');

async function createEmployee(req, res, next) {
    const body = await req.body;
    create(body, (error, results) => {
        if(error) {
            console.log(error);
            return req.status(200).json({
                success: 0,
                message: "Database Connect error"
            });
        }   
        return res.status(200).json({
            success:1,
            data: results
        }); 
    })
}

// async function getEmployees(req, res, next) {

//     getEmployees((error, results) => {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         return res.json({
//             success:1,
//             data: results
//         });  
//     })
// }

module.exports = { createEmployee, getEmployees };