const express = require('express');
const router = express.Router();
const userService = require('../services/users')

//create a new user
router.post('/create', (req, res)=>{
    const newUser = userService.registerUser(req.body);
    res.send(newUser).end();
})

module.exports = router;