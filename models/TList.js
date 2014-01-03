var mongoose = require('mongoose');
var artefactSchema = new mongoose.Schema({
  text: String
});
exports.TListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artefacts: [artefactSchema]
});