const express = require('express');
const Cart = require('../models/cart');
const Category = require('../models/category');
const Region = require('../models/region');
const Product = require('../models/product ');
const router = express.Router();

// Get all items in the cart
router.route('/')
  .get(async (req, res) => {
    try {
      const data = await Cart.find().populate('product_id').exec();
      const cartItems = data.map(item => ({
        id: item._id,
        name: item.product_id.name,
        quantity: item.quantity,
        price: item.product_id.price,
        description: item.product_id.description,
        image_path:item.product_id.image_path
      }));

      console.log(cartItems);
      res.render('cart', { carts: cartItems });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  })
  .post(async (req, res) => {
    const { quantity, product_id } = req.body;
    try {
      const cartItem = new Cart({ product_id, quantity });
      await cartItem.save();

      res.redirect('/carts');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

// Add a new item to the cart
router.route('/add')
  .get(async (req, res) => {
    const id = req.query.id;
    try {
      const categories = await Category.find();
      const regions = await Region.find();
      const product = await Product.findById(id);

      console.log(product);
      res.render('cart', { categories, regions, product });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

// Update an item in the cart
router.route('/:id')
  .put(async (req, res) => {
    const id = req.params.id;
    const { quantity } = req.body;
    try {
      await Cart.findByIdAndUpdate(id, { quantity });

      res.json([]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    try {
      await Cart.findByIdAndDelete(id);

      res.json([]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;