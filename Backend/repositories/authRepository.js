const { User } = require('../models'); 

class authRepository {
  static async findByEmail(email) {
    return User.findOne({ where: { email } });
  }
  static async createUser(name, email, hashedPassword, role) {
    return User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
  }
}

module.exports = authRepository;
