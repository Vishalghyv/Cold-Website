const express = require('express')
const mongoose = require('mongoose')

const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const passport = require("passport")

const validationLoginInput = require("../../validation/login")

const router = express.Router()
const secretKey = 'secret'

router.post('/register',async (req,res) => {
    const {userName, password} = req.body
    let user = {}
    user.userName = userName
    user.password = password
    User.findOne({userName:userName})
    .then(user => {
        if(user) {
            return res.status(404).json()
        }
    })

    let newUser = new User(user)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password,salt,(err,hash) => {
            if(err) throw err
             newUser.password = hash
             newUser.save()
             .then(user => res.json(user))
             .catch(err => console.log(err))
        })
    })
})


router.post('/login',async (req,res) => {
    const {errors,isValid} = validationLoginInput(req.body)

    //Check Validation
    if(!isValid) {
        return res.status(400).json(errors)
    }

    const {userName, password} = req.body
    

    User.findOne({userName:userName})
    .then(user => {
        if(!user) {
            errors.userName = 'User not found'
            return res.status(404).json(errors)
        }
        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if (isMatch) {
                //User Matched
                const payload = {id: user.id, userName: user.userName}
                jwt.sign(payload, secretKey, {expiresIn: 7200}, 
                (err, token) => {
                    // res.json({
                    //     success:true,
                    //     token:'Bearer ' + token
                    // })
                    var auth = 'Bearer '+token
                    // console.log(auth)
                    
                    res.cookie('jwtToken', auth, { maxAge: 900000, httpOnly: true });
                    // req.session.access_token =token;
                    res.redirect("/current")
                } )
            } else {
                errors.password = 'Password Incorrect'
                return res.status(400).json(errors)
            }
        })

    })

})

router.post('/reset_password',async (req,res) => {
    const {userName, password, newPassword} = req.body

    User.findOne({userName:userName})
    .then(user => {
        if(!user) {
            return res.status(404).json({userName:'User not found'})
        }
        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if (isMatch) {
                //User Matched
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newPassword,salt,(err,hash) => {
                        if(err) throw err
                         user.password = hash
                         user.save()
                         .then(user => res.json(user))
                         .catch(err => console.log(err))
                    })
                })
            } else {
                res.status(400).json({msg:'Password Incorrect'})
            }
        })
    })
})


module.exports = router
