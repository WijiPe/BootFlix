const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt")


module.exports = app=>{
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get('/api/users', UserController.getAllUsers);
    app.put('/api/user/update/:id', UserController.updateUser);
}