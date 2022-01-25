const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controllers');

router.post('/register', userController.registerNewUser);

router.post('/login', userController.loginUser);

router.post('/userProfile', userController.returnUserProfile);

module.exports = router;
