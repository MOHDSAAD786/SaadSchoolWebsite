const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacherId: { type: String, required: true, unique: true },
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

teacherSchema.index({ teacherId: 1, className: 1 });

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
