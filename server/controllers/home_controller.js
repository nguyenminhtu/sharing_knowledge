const HomeController = require("express").Router();

HomeController.get("/", (req, res) => {
  res.render("home", {title: "Welcome to sharing knowledge !"});
});

module.exports = HomeController;
