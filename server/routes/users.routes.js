const userController = require('../controllers/user.controller');

module.exports = (app) => {
    // app.get('/api', userController.index);
    app.post('/api/user/new', userController.createUser)
    app.get('/api/user', userController.getAllUsers)
    app.get('/api/user/:id', userController.getUser)
    app.put('/api/user/update/:id', userController.updateUser)
    app.delete('/api/user/delete/:id', userController.deleteUser)
}