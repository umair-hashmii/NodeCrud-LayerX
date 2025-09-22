const UserModel = require('../models/UserModel');

class UserRepository {
  constructor() {
    this.users = [
      new UserModel("1", "Ali Khan", "ali@example.com", new Date().toISOString()),
      new UserModel("2", "Sara Ahmed", "sara@example.com", new Date().toISOString())
    ];
  }

  async findAll() {
    return this.users;
  }

  async create(user) {
    this.users.push(user);
    return user;
  }
}

const userRepository = new UserRepository();
module.exports = { userRepository };