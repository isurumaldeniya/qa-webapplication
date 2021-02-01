const User = require('../db/models/Users')

function registerUser(userDto){
    const newUser = new User(userDto);
    newUser.save((err) => {
        if(!err){
            console.log(newUser);
            return newUser;
        }
    })

}

module.exports = {
    registerUser
}