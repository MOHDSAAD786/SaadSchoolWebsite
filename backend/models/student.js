const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  className: { type: String, required: true }, 
  password: { type: String, required: true },
  attendance: [
    {
      date: { type: String, required: true }, 
      status: { type: String, enum: ['Present', 'Absent'], required: true }
    }
  ],
  notes: [String],
  results: [
    {
      subject: String,
      marks: Number,
      grade: String
    }
  ],
  timetable: [
    {
      day: String,
      slots: [String]
    }
  ]
});


studentSchema.index({ rollNo: 1, className: 1 });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;