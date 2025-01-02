const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRepository = require('../repositories/authRepository'); // Adjust path to your repository

class authService {
  static async signup(name, email, password, role = 'user') {
    try {
      const existingUser = await authRepository.findByEmail(email);
      if (existingUser) {
        throw new Error('Email already in use');
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await authRepository.createUser(name, email, hashedPassword, role);

      return { message: 'User created successfully', user: newUser };
    } catch (error) {
      throw new Error(error.message);
    }
  }


  static async login(email, password) {
    try {
      const user = await authRepository.findByEmail(email);
      if (!user) {
        throw new Error('User not found');
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      );

      return { message: 'Login successful', token };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = authService;
