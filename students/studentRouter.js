const express = require('express');
const router = express.Router();
const studentController = require('./studentController');

const studentRouter = express.Router();
studentRouter.get('/', studentController.getAllStudents);
studentRouter.delete('/:id', studentController.deleteStudent);
studentRouter.post('/add', studentController.addStudent);
studentRouter.put('/update/:name', studentController.updateStudentName);
studentRouter.get('/find',studentController.findstudentwithclass);
studentRouter.get('/findpoint',studentController.findPoint)

router.use('/students', studentRouter);

module.exports = router;