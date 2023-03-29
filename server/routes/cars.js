const router = require("express").Router();
const carsController = require("../controllers/cars");

/* GET */
router.get("/", carsController.getAllCars);

/* POST */
router.post("/", carsController.addCar);

/* PUT */
router.put("/:id", carsController.updateCar);

/* DELETE */
router.delete("/:id", carsController.deleteCar);

module.exports = router;
