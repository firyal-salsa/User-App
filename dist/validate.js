"use strict";

var respone = require("respone");

var jwt = require("jsonwebtoken");

var checkToken = function checkToken(role) {
  return function (req, res, next) {
    var tokenauth = req.headers.tokenauth;

    if (!tokenauth) {
      return respone(res, 401, {
        msg: "Silahkan login"
      });
    }

    jwt.verify(tokenauth, process.env.JWT_KEYS, function (err, decode) {
      if (err) {
        return respone(res, 401, err);
      }

      if (decode.role === role) {
        next();
      } else {
        return respone(res, 401, {
          msg: "Akses tidak diizinkan"
        });
      }
    });
  };
};

module.exports = checkToken;