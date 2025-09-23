const { userService } = require('../services/userService.js');
const ResponseTrait = require('../models/ResponseTrait');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            if (!users || users.length === 0) {
                return res.status(404).json(ResponseTrait.build({
                    status: false,
                    code: 404,
                    message: 'No users found'
                }));
            }
            // Example token and meta info
            const token = {
                access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                type: 'Bearer',
                expiresIn: 3600,
                refresh: 'def50200f4e3a4a9e2f4a3f8e3b1c4c3...'
            };
                        const meta = {
                                total: users.length,
                                page: 1,
                                limit: users.length,
                                schema: {
                                    id: 'string',
                                    name: 'string',
                                    email: 'string',
                                    roleId: 'string',
                                    roleName: 'string',
                                    isActive: 'boolean',
                                    avatarUrl: 'string',
                                    createdAt: 'date',
                                    lastLogin: 'date'
                                }
                        };
            return res.status(200).json(ResponseTrait.build({
                status: true,
                code: 200,
                message: 'Users retrieved successfully',
                data: { users, token },
                meta
            }));
        } catch (error) {
            console.error('Error in getAllUsers:', error);
            return res.status(500).json(ResponseTrait.build({
                success: false,
                message: 'Internal server error',
                error: error.message,
                status: 500
            }));
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json(ResponseTrait.build({
                    status: false,
                    code: 404,
                    message: 'User not found'
                }));
            }
            return res.status(200).json(ResponseTrait.build({
                status: true,
                code: 200,
                message: 'User retrieved successfully',
                data: { user }
            }));
        } catch (error) {
            return res.status(500).json(ResponseTrait.build({
                success: false,
                message: 'Internal server error',
                error: error.message,
                status: 500
            }));
        }
    }

    async createUser(req, res) {
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json(ResponseTrait.build({
                status: true,
                code: 201,
                message: 'User created successfully',
                data: { user: newUser }
            }));
        } catch (error) {
            res.status(400).json(ResponseTrait.build({
                success: false,
                message: error.message,
                error: error.message,
                status: 400
            }));
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await userService.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                return res.status(404).json(ResponseTrait.build({
                    status: false,
                    code: 404,
                    message: 'User not found'
                }));
            }
            res.status(200).json(ResponseTrait.build({
                status: true,
                code: 200,
                message: 'User updated successfully',
                data: { user: updatedUser }
            }));
        } catch (error) {
            res.status(400).json(ResponseTrait.build({
                success: false,
                message: error.message,
                error: error.message,
                status: 400
            }));
        }
    }

    async deleteUser(req, res) {
        try {
            const deleted = await userService.deleteUser(req.params.id);
            if (!deleted) {
                return res.status(404).json(ResponseTrait.build({
                    status: false,
                    code: 404,
                    message: 'User not found'
                }));
            }
            res.status(200).json(ResponseTrait.build({
                status: true,
                code: 200,
                message: 'User deleted successfully'
            }));
        } catch (error) {
            res.status(500).json(ResponseTrait.build({
                success: false,
                message: 'Internal server error',
                error: error.message,
                status: 500
            }));
        }
    }
}

const userController = new UserController();
module.exports = { userController };