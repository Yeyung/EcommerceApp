const express = require('express');
const pool = require('../utils/connectMSQL');
const Product = require('../models/product ');
// const mongoose =e
const router = express.Router()


router.route('/').
get(async(req,res)=>{
    // const data  =await pool.query('SELECT * FROM Products;');
    const data = await Product.findById();
    
    // console.log(data[0])
    res.json(data)
});

router.route('/:id').
get(async(req,res)=>{
    const id = req.params.id;
    // const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)
    console.log("+>",id)

    const data = await Product.findById(id);

    console.log(data)
    res.render('product',{product:data});
})




module.exports=router;