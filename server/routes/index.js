const router = require("express").Router();
const sequenceGenerator = require("./sequenceGenerator");

/* GET home page. */
router.get("/", (req, res) => {
  res.redirect("/cars");
});

router.use("/cars", require("./cars"));

module.exports = router;
