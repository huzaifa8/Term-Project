const adminController = require('../controllers/admin');
const express = require('express');
const router = express.Router(); 

router.get('/add-task', adminController.getAddTask);

router.post('/post-task', adminController.postAddTask);

router.get('/edit-task/:id', adminController.getEditTask);

router.post('/edit-task', adminController.postEditTask);

router.post('/delete-task/:id', adminController.postDeleteTask); 

module.exports = router; 