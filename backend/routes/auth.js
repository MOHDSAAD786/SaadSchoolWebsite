const express = require('express');
const router = express.Router();

const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Admin = require('../models/admin');
const Principal = require('../models/Principal');


// Student Login
router.post('/student-login', async (req, res) => {
  const { rollNo, password } = req.body;
  const user = await Student.findOne({ rollNo });
  if (user && user.password === password) {
    res.json({ success: true, student: user });
  } else {
    res.status(401).json({ success: false, msg: "Invalid student credentials" });
  }
});


//  Teacher Login 
router.post('/teacher-login', async (req, res) => {
  const { teacherId, password } = req.body;
  const user = await Teacher.findOne({ teacherId });
  if (user && user.password === password) {
    res.json({ success: true, data: user });
  } else {
    res.status(401).json({ success: false, msg: "Invalid teacher credentials" });
  }
});

//  Admin Login 
router.post('/admin-login', async (req, res) => {
  const { adminId, password } = req.body;
  const user = await Admin.findOne({ adminId });
  if (user && user.password === password) {
    res.json({ success: true, data: user });
  } else {
    res.status(401).json({ success: false, msg: "Invalid admin credentials" });
  }
});

//  Principal Login
router.post('/principal-login', async (req, res) => {
  const { principalId, password } = req.body;
  const user = await Principal.findOne({ principalId });
  if (user && user.password === password) {
    res.json({ success: true, data: user });
  } else {
    res.status(401).json({ success: false, msg: "Invalid principal credentials" });
  }
});

module.exports = router;
