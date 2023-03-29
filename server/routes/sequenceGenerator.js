var Sequence = require("../models/sequence.model");

var maxCarId;
var sequenceId = null;

function SequenceGenerator() {
  Sequence.findOne({})
    .exec()
    .then((sequence) => {
      sequenceId = sequence._id;
      maxCarId = sequence.maxCarId;
    })
    .catch((err) => {
      return res.status(500).json({
        title: "An error occurred",
        error: err,
      });
    });
}

SequenceGenerator.prototype.nextId = function (collectionType = "cars") {
  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case "cars":
      maxCarId++;
      updateObject = { maxCarId: maxCarId };
      nextId = maxCarId;
      break;
    default:
      return -1;
  }

  Sequence.updateOne({ _id: sequenceId }, { $set: updateObject })
    .then((result) => {
      console.log("Sequence updated successfully");
    })
    .catch((error) => {
      console.log("An error occurred while updating sequence:", error);
    });

  return nextId;
};

module.exports = new SequenceGenerator();
