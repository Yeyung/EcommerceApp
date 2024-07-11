const mongoose = require('mongoose');

  // Define the Regions schema and model
  const regionSchema = new mongoose.Schema({
    name: { type: String, required: true }
  });
  
  const Region = mongoose.models.Region || new mongoose.model('Region', regionSchema);


module.exports = Region