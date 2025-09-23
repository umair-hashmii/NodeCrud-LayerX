const UserModel = require('../models/UserModel');

class UserRepository {
  constructor() {
    // Example role IDs for foreign key
    const roleAdmin = 'role-1';
    const roleUser = 'role-2';
    this.users = [
      new UserModel({
        id: '1',
        name: 'Umair Hashmi',
        email: 'umair@example.com',
        roleId: roleAdmin,
        roleName: 'Admin',
        isActive: true,
        avatarUrl: 'https://example.com/avatars/umair.png',
        createdAt: new Date(),
        lastLogin: new Date(Date.now() - 1000 * 60 * 5)
      }),
      new UserModel({
        id: '2',
        name: 'Ali Ahmed',
        email: 'ali@example.com',
        roleId: roleUser,
        roleName: 'User',
        isActive: true,
        avatarUrl: 'https://example.com/avatars/ali.png',
        createdAt: new Date(),
        lastLogin: new Date(Date.now() - 1000 * 60 * 10)
      })
    ];
  }

  async findAll() {
    return this.users;
  }

  async findById(id) {
    return this.users.find(u => u.id === id) || null;
  }

  async create(user) {
    this.users.push(user);
    return user;
  }

  async update(id, userData) {
    const idx = this.users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    this.users[idx] = { ...this.users[idx], ...userData };
    return this.users[idx];
  }

  async delete(id) {
    const idx = this.users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    this.users.splice(idx, 1);
    return true;
  }
}

const userRepository = new UserRepository();
module.exports = { userRepository };