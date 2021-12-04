const express = require("express")
const routing = express.Router()
const ctrl = require("./controller")

routing.put("/:_id", ctrl.Update)

module.exports = routing