const express = require('express');
const router = express.Router();
const svController = require('./svController');

router.get('/', svController.getAllStudents);
router.get('/:id', svController.deleteStudent);
router.post('/add', svController.addStudent);
router.put('/update/:name', svController.updateStudentName);

module.exports = router;