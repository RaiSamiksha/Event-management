const authService = require('../services/authService'); // Adjust path to your service

class authController {
  // Signup controller
  static async signup(req, res) {
    console.log(req.body);
    const { name, email, password, role } = req.body;
    try {
      const result = await authService.signup(name, email, password, role);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Login controller
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const result = await authService.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = authController;
