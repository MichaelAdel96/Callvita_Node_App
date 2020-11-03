// require dependincies
var express = require('express');
var router = express.Router();

var userController = require('./controllers/UserController');


/***********************************User Routes******************************* */

router.get('/api/tasks', userController.getAllTasks);

router.put('/api/tasks', userController.editTask);

router.delete('/api/tasks', userController.deleteTask);


/***************************************************************************** */


module.exports = router;