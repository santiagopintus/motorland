const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Id is required."],
  },
  make: {
    type: String,
    required: [true, "Make is required."],
  },
  model: {
    type: String,
    required: [true, "Model is required."],
  },
  year: {
    type: Number,
    required: [true, "Year is required."],
  },
  color: {
    type: String,
    required: [true, "Color is required."],
  },
  mileage: {
    type: Number,
    required: [true, "Mileage is required."],
  },
  price: {
    type: Number,
    required: [true, "Price is required."],
  },
  img: {
    type: String,
    required: [true, "Image URL is required."],
  },
  fuelType: {
    type: String,
  },
  transmission: {
    type: String,
  },
  bodyType: {
    type: String,
  },
  condition: {
    type: String,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
