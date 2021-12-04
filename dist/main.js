"use strict";

var express = require("express");

var routing = express.Router();

var create = require("./readUserService/controller");

routing.use("/getAccountNumber", create);
module.exports = routing;