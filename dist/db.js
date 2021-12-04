"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

require('mongoose-type-email');

var Firyal = (0, _mongoose.Schema)({
  Id: _mongoose.Schema.Types.ObjectId,
  userName: {
    type: String,
    unique: true
  },
  accountNumber: {
    type: Number,
    min: 5,
    max: 10
  },
  emailAddress: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  identityNumber: {
    type: Number,
    min: 6,
    max: 12
  }
});

var _default = (0, _mongoose.model)("Firyal", Firyal);

exports["default"] = _default;