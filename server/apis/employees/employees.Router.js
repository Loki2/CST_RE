const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createEmployee, getEmployees } = require('./employees.Controller');

router.get('/', getEmployees);
router.post('/', createEmployee);

module.exports = router;