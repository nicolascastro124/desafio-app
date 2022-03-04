
//Rutas de acceso utilizadas en la pagina web

//dependecia del framework express
const express = require('express');
const router = express.Router();

//exportacion de controlador de producto
const productController = require('../controllers/productController'); 


//uso del metodo list para poder llenas la pagina con los datos obtenidos en la bd
router.get('/', productController.list);
//uso del metodo buscar para poder llenas la pagina con los datos obtenidos en la bd
router.post('/buscar', productController.buscar);


module.exports = router;