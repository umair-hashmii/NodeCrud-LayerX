const { v4: uuidv4 } = require('uuid');

class UserModel {
  /**
   * @param {Object} params
   * @param {string} params.id - Primary key (UUID)
   * @param {string} params.name
   * @param {string} params.email
   * @param {string} params.roleId - Foreign key (Role UUID)
   * @param {Date} params.createdAt
   */
  constructor({ id = uuidv4(), name, email, roleId, roleName = '', isActive = true, avatarUrl = '', createdAt = new Date(), lastLogin = null }) {
    this.id = id; // primary key
    this.name = name;
    this.email = email;
    this.roleId = roleId; // foreign key (example)
    this.roleName = roleName;
    this.isActive = isActive;
    this.avatarUrl = avatarUrl;
    this.createdAt = createdAt;
    this.lastLogin = lastLogin;
  }

  validate() {
    if (!this.name || typeof this.name !== 'string' || !this.name.trim()) {
      return { ok: false, message: 'name is required' };
    }
    if (!this.email || typeof this.email !== 'string' || !this.email.includes('@')) {
      return { ok: false, message: 'valid email is required' };
    }
    if (!this.roleId || typeof this.roleId !== 'string') {
      return { ok: false, message: 'roleId (foreign key) is required' };
    }
    return { ok: true };
  }
}

module.exports = UserModel;