const express = require('express');

const router = express.Router()


router.route('/:id').
get(async(req,res)=>{
    const id = req.params.id;

    const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)
    res.send('The is is '+id);
});




module.exports=router;