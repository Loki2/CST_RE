const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createUser, getUsers, getByUserId, updateUser, delUser, login } = require("./users.Controller");

router.post("/register", checkToken, createUser);
router.get("/", getUsers);
router.get("/:id", getByUserId);
router.post("/login", login);
router.patch("/:user_id", updateUser);
router.delete("/:user_id", delUser);


module.exports = router;
