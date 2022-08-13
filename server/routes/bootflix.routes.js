const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt")


module.exports = app=>{
    app.post("/bootflix/api/register", UserController.register);
    app.post("/bootflix/api/login", UserController.login);
    app.get("/bootflix/api/user/logout", UserController.logout);
    app.get("/bootflix/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get('/bootflix/api/users', UserController.getAllUsers);
    app.put('/bootflix/api/user/update/:id', UserController.updateUser);
    app.delete('/bootflix/api/user/delete/:id', UserController.deleteUser);
    app.get('/bootflix/api/user/:id', UserController.getUser);
}