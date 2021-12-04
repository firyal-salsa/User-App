const express = require("express")
const routing = express.Router()
const ctrl = require("./controller.js")

routing.get("/accountnumber", ctrl.getByAccountNumber)
routing.get("/identitynumber", ctrl.getByIdentityNumber)

module.exports = routing