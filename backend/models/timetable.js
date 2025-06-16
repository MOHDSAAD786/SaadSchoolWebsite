const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  className: String,
  day: String,
  slots: [String]
});

module.exports = mongoose.model('Timetable', timetableSchema);
