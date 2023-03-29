const sequenceGenerator = require("../routes/sequenceGenerator");
const Car = require("../models/car.model");

const getAllCars = (req, res) => {
  Car.find({})
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((error) => {
      res.status(500).json({
        title: "An error occurred",
        error: error,
      });
    });
};

const addCar = (req, res) => {
  const car = new Car({
    id: sequenceGenerator.nextId(),
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    mileage: req.body.mileage,
    price: req.body.price,
    img: req.body.img,
    fuelType: req.body.fuelType,
    transmission: req.body.transmission,
    bodyType: req.body.bodyType,
    condition: req.body.condition,
  });

  car
    .save()
    .then((createdCar) => {
      res.status(201).json({
        message: "Car added successfully",
        car: createdCar,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred",
        error: error,
      });
    });
};

const updateCar = (req, res) => {
  Car.findOne({ id: req.params.id })
    .then((car) => {
      car.make = req.body.make;
      car.model = req.body.model;
      car.year = req.body.year;
      car.color = req.body.color;
      car.mileage = req.body.mileage;
      car.price = req.body.price;
      car.img = req.body.img;
      car.fuelType = req.body.fuelType;
      car.transmission = req.body.transmission;
      car.bodyType = req.body.bodyType;
      car.condition = req.body.condition;

      Car.updateOne({ id: req.params.id }, car)
        .then((result) => {
          res.status(204).json({
            message: "Car updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Car not found.",
        error: { car: "Car not found" },
      });
    });
};

const deleteCar = (req, res) => {
  Car.findOneAndDelete({ id: req.params.id })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Car deleted successfully",
          car: result,
        });
      } else {
        res.status(404).json({
          message: "Car not found",
          error: { car: "Car not found" },
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred",
        error: error,
      });
    });
};

module.exports = {
  getAllCars,
  addCar,
  updateCar,
  deleteCar,
};