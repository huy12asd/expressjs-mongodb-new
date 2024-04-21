// module.exports = router;
const express = require('express');
const router = express.Router();
const svController = require('./svController');

// Students routes
const studentRouter = express.Router();
studentRouter.get('/', svController.getAllStudents);
studentRouter.delete('/:id', svController.deleteStudent);
studentRouter.post('/add', svController.addStudent);
studentRouter.put('/update/:name', svController.updateStudentName);

// Classes routes
const classRouter = express.Router();
classRouter.get('/', svController.getAllclass);
classRouter.delete('/:id', svController.deleteclass);
classRouter.post('/add', svController.addclass);
classRouter.put('/update/:name', svController.updateclassName);

// Subject routes
const subjectRouter = express.Router();
subjectRouter.get('/', svController.getAllsubject);
subjectRouter.delete('/:id', svController.deletesubject);
subjectRouter.post('/add', svController.addsubject);
subjectRouter.put('/update/:name', svController.updatesubjectName);

// Mounting the routers
router.use('/students', studentRouter);
router.use('/classes', classRouter);
router.use('/subjects', subjectRouter);

module.exports = router;
