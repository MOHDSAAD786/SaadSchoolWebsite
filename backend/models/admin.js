
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  contact: { type: String }
  
});

module.exports = mongoose.model('admin', adminSchema);
