let express = require('express'),
    router = express.Router();

let authenticationController = require('../controllers/authController.js');

/**
 * (POST Method)
 */
// SignUp
router.post('/login', authenticationController.login);

//SignIn
router.post('/register', authenticationController.register);

module.exports = router;