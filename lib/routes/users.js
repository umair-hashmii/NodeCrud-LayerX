const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/userController');
const ApiEndpoints = require('../config/ApiEndpoints');

// Use relative paths for router, but reference ApiEndpoints for clarity
router.get('/', userController.getAllUsers.bind(userController)); // ApiEndpoints.getAllUsers
router.get('/:id', userController.getUserById.bind(userController)); // ApiEndpoints.getUserById
router.post('/', userController.createUser.bind(userController)); // ApiEndpoints.createUser
router.put('/:id', userController.updateUser.bind(userController)); // ApiEndpoints.updateUserById
router.delete('/:id', userController.deleteUser.bind(userController)); // ApiEndpoints.deleteUserById

module.exports = router;