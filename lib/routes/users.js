const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/userController');

// Change the controller method name to match
router.get('/', userController.getAllUsers.bind(userController));
router.post('/', userController.createUser.bind(userController));

module.exports = router;