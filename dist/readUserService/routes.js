"use strict";

var express = require("express");

var routing = express.Router();

var ctrl = require("./controller.js");

routing.post("/", ctrl.getByAccountNumber);
module.exports = routing;