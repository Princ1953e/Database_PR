const express = require("express");
const controller = require("../Controller/controller.js");

const routes = express.Router();

routes.get("/", controller.localHost);
routes.post("/submit", controller.userSubmit);
routes.get("/editPage/:id", controller.editUser);
routes.post("/updateUser/:id", controller.updateUser);
routes.get("/deleteUser/:id", controller.deleteUser);

module.exports = routes;
