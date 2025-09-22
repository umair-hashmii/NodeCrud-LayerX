const { userService } = require('../services/userService');
const ResponseModel = require('../models/ResponseModel');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(new ResponseModel(true, "Users retrieved successfully", users));
        } catch (error) {
            res.status(500).json(new ResponseModel(false, error.message));
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