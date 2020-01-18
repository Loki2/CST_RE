const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createEmpolyee, getEmployees, getByEmployeeId, updateEmployee, delEmployee } = require('./employees.Controller')

router.get('/', getEmployees);
router.post('/', createEmpolyee);
router.get('/:id', getByEmployeeId);
router.patch('/:id', updateEmployee);
router.delete('/:id', delEmployee)

module.exports = router;