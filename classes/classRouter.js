const express = require('express');
const router = express.Router();
const classController = require('./classController');

const classRouter = express.Router();
classRouter.get('/', classController.getAllclass);
classRouter.delete('/:id', classController.deleteclass);
classRouter.post('/add', classController.addclass);
classRouter.put('/update/:name', classController.updateclassName);

router.use('/classes', classRouter);

module.exports = router;