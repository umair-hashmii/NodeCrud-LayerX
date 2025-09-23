const { userService } = require('../services/userService.js');
const ResponseModel = require('../models/ResponseModel');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            if (!users || users.length === 0) {
                return res.status(404).json(new ResponseModel(false, 'No users found'));
            }
            return res.status(200).json(new ResponseModel(true, 'Users retrieved successfully', users));
        } catch (error) {
            console.error('Error in getAllUsers:', error);
            return res.status(500).json(new ResponseModel(false, 'Internal server error'));
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json(new ResponseModel(false, 'User not found'));
            }
            return res.status(200).json(new ResponseModel(true, 'User retrieved successfully', user));
        } catch (error) {
            return res.status(500).json(new ResponseModel(false, 'Internal server error'));
        }
    }

    async createUser(req, res) {
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json(new ResponseModel(true, 'User created successfully', newUser));
        } catch (error) {
            res.status(400).json(new ResponseModel(false, error.message));
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await userService.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                return res.status(404).json(new ResponseModel(false, 'User not found'));
            }
            res.status(200).json(new ResponseModel(true, 'User updated successfully', updatedUser));
        } catch (error) {
            res.status(400).json(new ResponseModel(false, error.message));
        }
    }

    async deleteUser(req, res) {
        try {
            const deleted = await userService.deleteUser(req.params.id);
            if (!deleted) {
                return res.status(404).json(new ResponseModel(false, 'User not found'));
            }
            res.status(200).json(new ResponseModel(true, 'User deleted successfully'));
        } catch (error) {
            res.status(500).json(new ResponseModel(false, 'Internal server error'));
        }
    }
}

const userController = new UserController();
module.exports = { userController };