
const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Principal = require('../models/Principal');
const Note = require('../models/note'); 


router.get('/profile/:principalId', async (req, res) => {
  try {
    const principal = await Principal.findOne({ principalId: req.params.principalId });
    if (principal) {
      res.json({ success: true, data: principal });
    } else {
      res.status(404).json({ success: false, msg: "Principal not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
});


router.get('/student/:rollNo', async (req, res) => {
  try {
    const student = await Student.findOne({ rollNo: req.params.rollNo });
    if (student) res.json({ success: true, data: student });
    else res.status(404).json({ success: false, msg: "Student not found" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
});


router.get('/teacher/:teacherId', async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ teacherId: req.params.teacherId });
    if (teacher) res.json({ success: true, data: teacher });
    else res.status(404).json({ success: false, msg: "Teacher not found" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
});


router.get('/attendance/:className', async (req, res) => {
  try {
    const students = await Student.find({ className: req.params.className });
    
    const result = students.map(s => ({
      rollNo: s.rollNo,
      name: s.name,
      attendance: s.attendance  
    }));
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

router.post('/notes', async (req, res) => {
  const { subject, className, fileUrl } = req.body;
  try {
    const note = new Note({ subject, className, fileUrl });
    await note.save();
    res.json({ success: true, data: note });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
});


router.get('/notes/:className', async (req, res) => {
  try {
    const notes = await Note.find({ className: req.params.className });
    res.json({ success: true, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

module.exports = router;
