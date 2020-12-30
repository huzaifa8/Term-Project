const homeController = require('../controllers/home');
const express = require('express'); 
const router = express.Router(); 


router.get('/', homeController.getHomePage);

router.get('/task/:id', homeController.getTaskDetails); 

module.exports = router; 