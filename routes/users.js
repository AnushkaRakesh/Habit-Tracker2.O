const router = require('express').Router();

//User model
const User = require('../models/User');

//controllers
const userController = require('../controllers/user_controller');

//Login Page
router.get('/login', (req, res) => res.render('login',{
    title:'Login'
}));

//Register Page
router.get('/register', (req, res) => res.render('register',{
    title:'Register'
}));

//Register Handle
router.post('/register',userController.userRegistration);

//login handle
router.post('/login',userController.logIn);

//---------Logout Handle----------//
router.get('/logout', (req, res) => {
    res.redirect('/users/login');
});



module.exports = router;