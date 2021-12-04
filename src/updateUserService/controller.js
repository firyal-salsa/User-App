const user = {}
const Firyal = require('../db');
const respone = require("../helper/respone")
const Logger = require('../helper/logger')
const jwt = require("jsonwebtoken")

let token = async function (emailAddress){
    try{
        const payload = {
            user: emailAddress,
            role: pengguna
        }
        const token = jwt.sign(payload, process.env.JWT_KEYS, { expiresIn: '1h' })
        const result = {
            message: "token telah dibuat",
            token: token,
        }
        return result
    } catch(error){
        throw error
    }
}

user.Update = async (req, res) => {
    try { 
        const update = await Firyal.findByIdAndUpdate(
            req.params._id,
            req.body,
            {new: true},
        )
        const result = await token(req.body.emailAddress)
        respone(res, 200, result)
        return Logger.http('Update data success')
    } catch (error) {
       respone(res, 500, error, true)
       return Logger.error(error)
    }
}

module.exports = user