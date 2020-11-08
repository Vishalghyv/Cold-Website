const express = require('express')
const mongoose = require('mongoose')

const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const passport = require("passport")

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
    const {userName, password} = req.body
    

    User.findOne({userName:userName})
    .then(user => {
        if(!user) {
            return res.status(404).json({userName:'User not found'})
        }
        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if (isMatch) {
                //User Matched
                const payload = {id: user.id, userName: user.userName}
                jwt.sign(payload, secretKey, {expiresIn: 7200}, 
                (err, token) => {
                    res.json({
                        success:true,
                        token:'Bearer ' + token
                    })
                } )
            } else {
                res.status(400).json({msg:'Password Incorrect'})
            }
        })

    })

    let newUser = new User(user)
})

router.get('/current',passport.authenticate('jwt',{session:false}), (req,res)=> {
    res.json({
        id:req.user.id,
        userName:req.user.userName
    })
})

module.exports = router
