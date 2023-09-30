const  express  = require("express");
const router= express.Router()
const apiController= require('../controllers/apiController')


router.get('/gestores',apiController.listGestores)
router.get('/clientes',apiController.listClientes)


module.exports = router