const express = require("express")
const routing = express.Router()
const get = require("./readUserService/routes")
const create = require("./createUserService/routes")
const del = require("./deleteUserService/routes")
const update = require("./updateUserService/routes")

routing.use("/", get)
routing.use("/save", create)
routing.use("/delete", del)
routing.use("/update", update)

module.exports = routing