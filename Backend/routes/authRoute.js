const express = require('express');
const authController = require('../controllers/authController'); // Adjust path to your controller

const router = express.Router();

// POST /signup
router.post('/signup', authController.signup);

// POST /login
router.post('/login', authController.login);

module.exports = router;
