const express = require('express');
const router = express.Router()
const pool = require('../utils/connectMSQL');
const { getHome } = require('../controllers/products');
const Category = require('../models/category');
const Region = require('../models/region');

router.route('/')
.get(async(req,res)=>{
    // const categories=await pool.query('SELECT * FROM Categories');
    // const regions=await pool.query('SELECT * FROM Regions');

    const categories =await Category.find({});
    const regions =await Region.find({});
    
    // if(classifieds && categories){
        res.render('add',{categories:categories[0],regions:regions[0]});
    // res.render('add');
}).post((req,res)=>{
    console.log(req.body)
})


module.exports = router;