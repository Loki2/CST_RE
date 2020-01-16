const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createAllowCode, getAllowCode, getByAllowCodeId, updateAllowCode, delAllowCode } = require("./allowcode.Controller");

router.post("/", createAllowCode);
router.get("/", getAllowCode);
router.get("/:allow_code_id", getByAllowCodeId);
router.patch("/:allow_code_id", updateAllowCode);
router.delete("/:allow_code_id", delAllowCode);


module.exports = router;