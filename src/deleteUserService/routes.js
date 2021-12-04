const express = require("express")
const routing = express.Router()
const validate = require("../middleware/validate")
const ctrl = require("./controller")

routing.delete("/:Id",validate("pengguna"), ctrl.Delete)

module.exports = routing