class UserBody {
	constructor({ name, email, roleId }) {
		this.name = name;
		this.email = email;
		this.roleId = roleId;
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

module.exports = UserBody;