const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createDepType, getAllDepType, getDepTypeById, updateDepType, delDepType } = require('./deptype.Contoller');

router.get('/', getAllDepType);
router.post('/', createDepType);
router.get('/:dep_type_id', getDepTypeById);
router.patch('/:dep_type_id', updateDepType);
router.delete('/:dep_type_id', delDepType);

module.exports = router;