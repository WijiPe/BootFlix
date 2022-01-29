const { response } = require('express');
const {User} = require('../models/user.model');

// module.exports.index = (req, res) => { 
//     res.json({
//         message: "Hello World"
//     });
// }

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err=>res.json(err))
}

module.exports.getAllUsers = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

module.exports.getUser = (req, res) => {
    User.findOne({_id: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json(err))
}

module.exports.deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(deleteConfrim => res.json(deleteConfrim))
        .catch(err => response.json(err))
}