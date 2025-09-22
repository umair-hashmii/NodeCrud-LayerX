const { userService } = require('../services/userService.js');
const ResponseModel = require('../models/ResponseModel');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            if (!users) {
                return res.status(404).json(new ResponseModel(false, "No users found"));
            }
            return res.status(200).json(new ResponseModel(true, "Users retrieved successfully", users));
        } catch (error) {
            console.error('Error in getAllUsers:', error);
            return res.status(500).json(new ResponseModel(false, "Internal server error"));
        }
    }

    async createUser(req, res) {
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json(new ResponseModel(true, "User created successfully", newUser));
        } catch (error) {
            res.status(400).json(new ResponseModel(false, error.message));
        }
    }
}

const userController = new UserController();
module.exports = { userController };