const Category = require('../models/category');
const Product = require('../models/product ');
const Region = require('../models/region');

exports.getHome = async(req,res)=>{
    try {
        // const data  =await pool.query('SELECT * FROM Products;');
        // const categories=await pool.query('SELECT * FROM Categories');
        // const regions=await pool.query('SELECT * FROM Regions');

        const categories =await Category.find({});
        const regions =await Region.find({});
        const data =await Product.find({});
        
        console.log(data);
    // if(classifieds && categories){
        res.render('index',{classifieds:data,categories:categories,regions:regions});
    // }
    } catch (error) {
        // res.status(500).send(error);
        
    }
}