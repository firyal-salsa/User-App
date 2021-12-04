const user = {}
const Firyal = require('../db');
const respone = require("../helper/respone")
const Logger = require('../helper/logger')

user.getByAccountNumber = async (req, res) => {
    try {
        const get = await Firyal.find().sort({ accountNumber: 1 });
        respone(res, 200, get)
        return Logger.http('Get data by Account Number Success')
    } catch (error) {
        respone(res, 500, error, true)
        return Logger.error(error)
    }
}

user.getByIdentityNumber = async (req, res) => {
    try {
        const get = await Firyal.find().sort({ identityNumber: 1 });
        respone(res, 200, get)
        return Logger.http('Get data by Account Number Success')
    } catch (error) {
        respone(res, 500, error, true)
        return Logger.error(error)
    }
}

module.exports = user