const mongoose = require('mongoose');


// Define the Cart schema and model
const cartSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  });
  
  const Cart = mongoose.models.Cart || new mongoose.model('Cart', cartSchema);


  module.exports = Cart;