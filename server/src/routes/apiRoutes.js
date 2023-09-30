const  express  = require("express");
const router= express.Router()
const apiController= require('../controllers/apiController')

// rutas gestores
// traer info
router.get('/gestores',apiController.listGestores)
router.get('/gestores/:id',apiController.gestorDetail)
// crear gestor
router.post('/crear/gestor',apiController.createGestor)
router.put('/editar/gestor/:id',apiController.gestorEdit)



// rutas clientes

router.get('/clientes',apiController.listClientes)
router.get('/clientes/:id',apiController.clientesDetail)
router.post('/crear/cliente',apiController.createCliente)
router.put('/editar/cliente/:id',apiController.clienteEdit)


module.exports = router