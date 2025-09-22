class UserBody {
constructor({ name, email }) {
this.name = name;
this.email = email;
}


validate() {
if (!this.name || typeof this.name !== 'string' || !this.name.trim()) {
return { ok: false, message: 'name is required' };
}
if (!this.email || typeof this.email !== 'string' || !this.email.includes('@')) {
return { ok: false, message: 'valid email is required' };
}
return { ok: true };
}
}


module.exports = UserBody;