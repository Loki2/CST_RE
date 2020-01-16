const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { 
        createClient, 
        getClients, 
        getByClientId, 
        updateClient, 
        delClient 
    } = require('./client.Controller');

router.get('/', getClients);
router.post('/', createClient);
router.get('/:client_id', getByClientId);
router.patch('/:client_id', updateClient);
router.delete('/:client_id', delClient);


module.exports = router;