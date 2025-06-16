const express = require('express');
const router = express.Router();
const Teacher = require('../models/teacher');
const Timetable = require('../models/timetable'); 

//  Get teacher by ID
router.get('/:teacherId', async (req, res) => {
  const teacher = await Teacher.findOne({ teacherId: req.params.teacherId });
  teacher ? res.json(teacher) : res.status(404).json({ msg: "Teacher not found" });
});

//  Get timetable by class name
router.get('/timetable/:className', async (req, res) => {
  try {
    const timetable = await Timetable.find({ className: req.params.className });
    if (!timetable || timetable.length === 0) {
      return res.status(404).json({ msg: "Timetable not found" });
    }
    res.json(timetable);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching timetable", error: err.message });
  }
});

module.exports = router;
