
const mongoose = require('mongoose');

const principalSchema = new mongoose.Schema({
  principalId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  contact: { type: String }
  
});

module.exports = mongoose.model('Principal', principalSchema);
