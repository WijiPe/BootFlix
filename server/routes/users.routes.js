const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt")

// dont use this
module.exports = app=>{
    app.post("/bootflix/api/register", UserController.register);
    app.post("/bootflix/api/login", UserController.login);
    app.get("/bootflix/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.post("/bootflixapi/user/logout", UserController.logout)
    app.get('/bootflix/api/users', UserController.getAllUsers)
    app.put('/bootflix/api/user/update/:id', UserController.updateUser)
    app.delete('/bootflix/api/user/delete/:id', UserController.deleteUser)
}




// const userController = require('../controllers/user.controller');

// module.exports = (app) => {
//     // app.get('/api', userController.index);
//     app.post('/api/user/create', userController.createUser)
//     app.get('/api/users', userController.getAllUsers)
//     
//     app.put('/api/user/update/:id', userController.updateUser)
// }