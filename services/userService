const { userRepository } = require('../repositories/UserRepository');
const UserModel = require('../models/UserModel');
// ...existing code...
const { v4: uuidv4 } = require('uuid');

class UserService {
  async getAllUsers() {
    return await userRepository.findAll();
  }

  async createUser(body) {
    const newUser = new UserModel(
      uuidv4(),
      body.name,
      body.email,
      new Date().toISOString()
    );
    return await userRepository.create(newUser);
  }
}

const userService = new UserService();
module.exports = { userService };
