
//exportaciones necesarias para el funcionamiento de la aplicacion
//requiriendo todas las dependencias de la configuracion
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const dbConfigPath = path.join(__dirname, 'config', 'db.json');
const dbConfig = require(dbConfigPath);

const app = express();

//-----------------//
// importacion de rutas
const productRoutes = require('./routes/product');

const { urlencoded } = require('express');


//-----------------//
// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')); 

//-----------------//
//middlewares
app.use(morgan('dev'));

//conexion a BD entregada para la realizacion de este proyecto
app.use(myConnection(mysql,dbConfigPath, 'single'));
app.use(express.urlencoded({extended : false}));

//-----------------//
//Uso de las rutas

app.use('/', productRoutes);


//-----------------//
// static files
app.use(express.static(path.join(__dirname, 'public')));


//-----------------//
// starting server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})
//-----------------//
