// module.exports = router;
const express = require('express');
const router = express.Router();
const studentController = require('./students/studentController');
const classController = require('./classes/classController');
const subjectController = require('./subjects/subjectController');
// Students routes
const studentRouter = express.Router();
studentRouter.get('/', studentController.getAllStudents);
studentRouter.delete('/:id', studentController.deleteStudent);
studentRouter.post('/add', studentController.addStudent);
studentRouter.put('/update/:name', studentController.updateStudentName);
studentRouter.get('/find',studentController.findstudentwithclass);



// Classes routes
const classRouter = express.Router();
classRouter.get('/', classController.getAllclass);
classRouter.delete('/:id', classController.deleteclass);
classRouter.post('/add', classController.addclass);
classRouter.put('/update/:name', classController.updateclassName);



// Subject routes
const subjectRouter = express.Router();
subjectRouter.get('/', subjectController.getAllsubject);
subjectRouter.delete('/:id', subjectController.deletesubject);
subjectRouter.post('/add', subjectController.addsubject);
subjectRouter.put('/update/:name', subjectController.updatesubjectName);

// Point routes
const pointRouter = express.Router();
pointRouter.get('/findpoint',studentController.findPoint)
// Mounting the routers
router.use('/students', studentRouter);
router.use('/classes', classRouter);
router.use('/subjects', subjectRouter);
router.use('/point',pointRouter)

module.exports = router;
