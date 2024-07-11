const Product = require('../models/product ');
const pool = require('../utils/connectMSQL');

exports.getProductById =async function(id){
    // const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)
    const data = await Product.findById(id);
    return data;
}