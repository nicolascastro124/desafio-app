// controlador encargado de los procesos que impliquen a la tabla productos
// ya sea conexiones y todo acceso a la base de datos
const controller = {};


//-----------------//
//metodo utilizado para obtener todos los datos almacenados en la BD
controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT id, name, url_image, price, discount, category FROM product order by category', (err, product) => {

            if(err){
                res.json(err);
            }
     
        

            console.log
            res.render('product', {
                data:product
            });
            
        });
    });
};

//-----------------//
//metodo utilizado para realizar la busqueda por nombre desde el buscador ubicado en header de la pagina
controller.buscar = (req, res) => {
   console.log(req.body.name)
   req.getConnection((err, conn) =>{
    conn.query('SELECT id, name, url_image, price, discount, category FROM product where name like ' + "'%" + req.body.name + "%'" , (err, product) => {

        if(err){
            res.json(err);
        }
   

        console.log
        res.render('product', {
            data:product
        });

        
    });
});
};


module.exports = controller;