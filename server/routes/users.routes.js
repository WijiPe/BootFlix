const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt")


module.exports = app=>{
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
}




// const userController = require('../controllers/user.controller');

// module.exports = (app) => {
//     // app.get('/api', userController.index);
//     app.post('/api/user/create', userController.createUser)
//     app.get('/api/users', userController.getAllUsers)
//     app.get('/api/user/:id', userController.getUser)
//     app.put('/api/user/update/:id', userController.updateUser)
//     app.delete('/api/user/delete/:id', userController.deleteUser)
// }