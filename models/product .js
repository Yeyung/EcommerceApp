const mongoose = require('mongoose')

// Define the Products schema and model
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock_quantity: { type: Number, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    region_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    image: String
  });
  
const Product = mongoose.models.Product || new mongoose.model('Product', productSchema);


module.exports = Product;