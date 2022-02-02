const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {secret} = require("../config/jwt");


class UserController {
    
    register(req, res){
        const user = new User(req.body);
        user.save()
            .then(()=>{
                res
                    .cookie("usertoken", jwt.sign({_id:user._id}, secret), {httpOnly: true})
                    .json({msg: "success", user: user})

            })
            .catch(err=> {res.json(err);
            console.log("you messed up")})
    }


    login(req, res){
        User.findOne({email:req.body.email})
            .then(user => {
                if(user == null){
                    res.json({msg: "Invalid login attempt"}) //email is not found
                }else{
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid=>{
                            if(passwordIsValid){
                                res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly:true})
                                    .json({msg: "success!"});
                            }else{
                                res.json({msg: "Invalid login attempt"}) //incorrect password
                            }
                        })
                        .catch(err => res.json({msg: "Invalid login attempt", err}))
                }
            })
            .catch(err=> res.json(err))
    }

    getLoggedInUser(req,res){
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
        User.findById(decodedJWT.payload._id)
            .then(user=> res.json(user))
            .catch(err=> res.json(err))
    }

    logout(req, res)  {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
    getAllUsers = (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.json(err))
    }

    updateUser = (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err))
    }

    deleteUser = (req, res) => {
        User.deleteOne({_id: req.params.id})
        .then(deleteConfrim => res.json(deleteConfrim))
        .catch(err => response.json(err))
    }

    getUser = (req, res) => {
        User.findOne({_id: req.params.id})
            .then(user => res.json(user))
            .catch(err => res.json(err))
    }
    
}


module.exports = new UserController();















// const { response } = require('express');
// const {User} = require('../models/user.model');

// // module.exports.index = (req, res) => { 
// //     res.json({
// //         message: "Hello World"
// //     });
// // }

// module.exports.createUser = (req, res) => {
//     User.create(req.body)
//         .then(user => res.json(user))
//         .catch(err=>res.json(err))
// }




// module.exports.updateUser = (req, res) => {
//     User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
//     .then(updatedUser => res.json(updatedUser))
//     .catch(err => res.json(err))
// }
