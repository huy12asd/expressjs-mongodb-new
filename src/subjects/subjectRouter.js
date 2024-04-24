const express = require('express');
const router = express.Router();
const subjectController = require('./subjectController');

const subjectRouter = express.Router();
subjectRouter.get('/', subjectController.getAllsubject);
subjectRouter.delete('/:id', subjectController.deletesubject);
subjectRouter.post('/add', subjectController.addsubject);
subjectRouter.put('/update/:name', subjectController.updatesubjectName);

router.use('/subjects', subjectRouter);

module.exports = router;