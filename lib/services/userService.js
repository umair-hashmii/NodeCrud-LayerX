const { userRepository } = require('../repositories/UserRepository');
const UserModel = require('../models/UserModel');
const UserBody = require('../models/UserBody');
const { v4: uuidv4 } = require('uuid');

class UserService {
  async getAllUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    return await userRepository.findById(id);
  }

  async createUser(body) {
    const userBody = new UserBody(body);
    const valid = userBody.validate();
    if (!valid.ok) throw new Error(valid.message);
    const newUser = new UserModel({
      id: uuidv4(),
      name: userBody.name,
      email: userBody.email,
      roleId: userBody.roleId,
      createdAt: new Date()
    });
    return await userRepository.create(newUser);
  }

  async updateUser(id, body) {
    const userBody = new UserBody(body);
    const valid = userBody.validate();
    if (!valid.ok) throw new Error(valid.message);
    const updated = await userRepository.update(id, {
      name: userBody.name,
      email: userBody.email,
      roleId: userBody.roleId
    });
    return updated;
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }
}

const userService = new UserService();
module.exports = { userService };
