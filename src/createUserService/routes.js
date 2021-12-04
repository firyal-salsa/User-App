const express = require("express")
const routing = express.Router()
const ctrl = require("./controller")

routing.post("/signup", ctrl.Save)

module.exports = routing