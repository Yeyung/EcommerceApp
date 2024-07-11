const Cart = require("../models/cart");
const Category = require("../models/category");
const Product = require("../models/product ");
const Region = require("../models/region");

module.exports = async function initializeDatabase() {
  try {
    // Clear existing collections
    await Category.deleteMany({});
    await Region.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});

    // Insert data into Categories collection
    const categories = await Category.insertMany([
      { name: 'Electronics', image: 'https://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg' },
      { name: 'Furniture', image: 'https://hips.hearstapps.com/hmg-prod/images/index-furniture-65f07553eef2f.jpg?resize=2048:*' },
      { name: 'Vehicles', image: 'https://www.capitalleasegroup.com/wp-content/uploads/2020/10/vehicle-fleet-maintenance-services.jpg' },
      { name: 'Real Estate', image: 'https://www.spiffyspools.com/wp-content/uploads/2023/05/istockphoto-1409298953-170667a.jpg' },
      { name: 'Jobs', image: 'jobseekers.png' },
      { name: 'Services', image: 'beauty.png' },
      { name: 'Pets', image: 'animals.png' },
      { name: 'Mobile Phones & Tablet', image: 'mobile.png' },
      { name: 'Health & Beauty', image: 'beauty.png' },
      { name: 'Fashion', image: 'fashion.png' },
      { name: 'Sport, Arts & Outdoors', image: 'hobbies.png' },
    ]);

    // Insert data into Regions collection
    const regions = await Region.insertMany([
      { name: 'Greater Accra' },
      { name: 'Ashanti' },
      { name: 'Bono' },
      { name: 'Ahafo' },
      { name: 'Volta' },
    ]);

    // Insert data into Products collection
    const products = await Product.insertMany([
      {
        name: 'Smartphone',
        description: 'A high-end smartphone with 128GB storage',
        price: 699.99,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image: 'https://www.niamapa.com/wp-content/uploads/2021/01/Samsung-Galaxy-A15.webp'
      },
      {
        name: 'HP Laptop',
        description: 'HP Laptop with 16GB RAM, 512GB SSD.',
        price: 300.00,
        stock_quantity: 30,
        category_id: categories[1]._id,
        region_id: regions[2]._id,
        image: 'https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp'
      },
      {
        name: 'HP Laptop',
        description: 'HP Laptop with 16GB RAM, 512GB SSD.',
        price: 300.00,
        stock_quantity: 30,
        category_id: categories[1]._id,
        region_id: regions[3]._id,
        image: 'https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp'
      },
      {
        name: 'Apple Monitor',
        description: 'Apple Monitor with 4K resolution.',
        price: 300.00,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image: 'https://photos5.appleinsider.com/gallery/47712-93255-Backs-of-Thunderbolt-Display-And-Studio-Display-xl.jpg'
      },
      {
        name: 'Smartphone',
        description: 'A high-end smartphone with 128GB storage',
        price: 699.99,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image: 'https://www.thestatesman.com/wp-content/uploads/2020/10/apple-12.jpg'
      }
    ]);

    // Insert data into Cart collection
    await Cart.create({ product_id: products[0]._id, quantity: 2 });

    console.log('DATABASE INITIALIZED...');
  } catch (err) {
    console.error('DATABASE INITIALIZATION ERROR:', err);
  } finally {
    // mongoose.connection.close();
  }
}