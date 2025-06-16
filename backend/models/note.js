const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  className: { type: String, required: true },
  fileUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);
