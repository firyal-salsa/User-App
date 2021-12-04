const user = {}
const Firyal = require('../db');
const respone = require("../helper/respone")
const Logger = require('../helper/logger')

user.Delete = async (req, res) => {
    try {
        const remove = await Firyal.deleteOne({ _id: req.params.Id});
        respone(res, 200, remove)
        return Logger.http('Delete success')
    } catch (error) {
        respone(res, 500, error, true)
        return Logger.error(error)
    }
}

module.exports = user