
const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM product', (err, product) => {

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