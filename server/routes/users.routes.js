const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt")

// dont use this
module.exports = app=>{
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get("api/user/logout", UserController.logout)
    app.get('/api/users', UserController.getAllUsers)
    app.put('/api/user/update/:id', UserController.updateUser)
    app.delete('/api/user/delete/:id', UserController.deleteUser)
}




// const userController = require('../controllers/user.controller');

// module.exports = (app) => {
//     // app.get('/api', userController.index);
//     app.post('/api/user/create', userController.createUser)
//     app.get('/api/users', userController.getAllUsers)
//     
//     app.put('/api/user/update/:id', userController.updateUser)
// }