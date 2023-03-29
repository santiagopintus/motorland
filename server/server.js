// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const cors = require("cors");

// ... ADD CODE TO IMPORT YOUR ROUTING FILES HERE ...

const app = express(); // create an instance of express

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(logger("dev")); // Tell express to use the Morgan logger

app.use(cors());

// Tell express to use the specified director as the
// root directory for your web site
app.use(express.static(path.join(__dirname, "dist/cms")));

// Tell express to map the default route ('/') to the index route
app.use("/", require("./routes"));

// ... ADD YOUR CODE TO MAP YOUR URL'S TO ROUTING FILES HERE ...

// Tell express to map all other non-defined routes back to the index page
app.get("*", (req, res) => {
  res.redirect("/");
});

// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, () => {
  console.log("API running on localhost: " + port);
});
