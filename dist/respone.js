"use strict";

function respon(res, status) {
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var desc = "";

  switch (status) {
    case 200:
      desc = "OK";
      break;

    case 201:
      desc = "Created";
      break;

    case 400:
      desc = "Bad Request";
      break;

    case 401:
      desc = "Unauthorized";
      break;

    case 500:
      desc = "Internal Server Error";
      break;

    case 501:
      desc = "Bad Gateway";
      break;

    case 304:
      desc = "Not Modified";
      break;

    case 404:
      desc = "Not Found";
      break;

    default:
      desc = "";
  }

  var isObject = function isObject(data) {
    return !!data && data.constructor === Object;
  };

  var isString = function isString(data) {
    if (typeof data == "string") {
      return true;
    } else {
      return false;
    }
  };

  var results = {};

  if (err == true) {
    results.status = status;
    results.description = desc;
    results.isError = true;
    results.result = isObject(result) ? [result] : Array.isArray(result) ? result : result;
  } else {
    results.status = status;
    results.description = desc;
    results.result = isObject(result) ? [result] : Array.isArray(result) ? result : result;
  }

  if (isString(result)) {
    results.result = {
      msg: result
    };
  }

  return res.status(status).json(results);
}

module.exports = respon;