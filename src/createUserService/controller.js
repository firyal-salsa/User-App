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

user.Save = async (req, res) => {
    const post = new Firyal({
        userName:req.body.userName,
        accountNumber:req.body.accountNumber,
        emailAddress:req.body.emailAddress,
        identityNumber:req.body.identityNumber
    });
    try{
        const result = await token(req.body.emailAddress)
        const save = await post.save()
        respone(res, 201, result)
        return Logger.http('Add data success')
    }catch(error){
        respone(res, 500, error, true)
        return Logger.error(error)
    }
}

module.exports = user