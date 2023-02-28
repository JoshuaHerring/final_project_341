const routes = require("express").Router();




routes.use("/hello", ()=> console.log("Hello World"));


module.exports = routes;