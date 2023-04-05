const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const cors = require("cors");
const routes = require("./routes");

const getDb = () => {
  return db;
};

const createServer = (port = process.env.PORT || 3000) => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(logger("dev"));
  app.use(cors());
  app.use(express.static(path.join(__dirname, "dist/cms")));

  app.use("/", routes);

  app.get("*", (req, res) => {
    res.redirect("/");
  });

  app.set("port", port);

  return http.createServer(app);
};

module.exports = createServer;
