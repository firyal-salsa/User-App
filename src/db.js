const mongoose = require('mongoose');
const Schema = require('mongoose')
require('mongoose-type-email');

const Firyal = new mongoose.Schema(
  {
    userName: { type: String, unique: true },
    accountNumber: { type: Number, min: 5, max: 10 },
    emailAddress: {type: mongoose.SchemaTypes.Email, required: true},
    identityNumber: { type: Number, min: 6, max: 12 },
  }
);

module.exports = mongoose.model('Firyal', Firyal)