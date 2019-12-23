const router = require("express").Router();
const { createUser } = require("./users.Controller");

router.post("/register", createUser);


module.exports = router;
