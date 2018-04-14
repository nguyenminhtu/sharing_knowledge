const express = require("express");
const bodyParser = require("body-parser");

const connection = require("./connection");

const HomeController = require("./controllers/home_controller");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/views"));
app.set("view engine", "pug");

app.use("/", HomeController);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
