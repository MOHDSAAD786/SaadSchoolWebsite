const express = require('express');
const router = express.Router();
const Timetable = require('../models/timetable'); // Model path

router.get('/:className', async (req, res) => {
  try {
    const className = req.params.className;
    const timetable = await Timetable.find({ className }); 
    res.json(timetable);
  } catch (error) {
    res.status(500).json({ message: "Error fetching timetable", error });
  }
});

module.exports = router;
