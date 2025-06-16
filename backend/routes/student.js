const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//  Get student full data (already there)
router.get('/:rollNo', async (req, res) => {
  const student = await Student.findOne({ rollNo: req.params.rollNo });
  student ? res.json(student) : res.status(404).json({ msg: "Student not found" });
});
//  Get timetable by class
router.get('/timetable/:className', async (req, res) => {
  const student = await Student.findOne({ className: req.params.className });
  if (!student || !student.timetable) return res.status(404).json({ msg: "Timetable not found" });

  res.json(student.timetable);
});


//  Get only attendance by rollNo
router.get('/:rollNo/attendance/:month', async (req, res) => {
  const { rollNo, month } = req.params;
  const student = await Student.findOne({ rollNo });

  if (!student) return res.status(404).json({ msg: "Student not found" });

  const filtered = student.attendance.filter(a => a.date.startsWith(month));
  res.json(filtered);
});

//  Get only results
router.get('/:rollNo/results', async (req, res) => {
  const student = await Student.findOne({ rollNo: req.params.rollNo });
  student ? res.json(student.results) : res.status(404).json({ msg: "Not found" });
});

module.exports = router;