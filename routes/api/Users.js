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
router.get('/test',async (req,res) => {res.json({msg:"sdgfdffffffsd"})})
router.get('/access',async (req,res) => {

    res.json({msg:"sfffsd"})})
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
                    // res.json({
                    //     success:true,
                    //     token:'Bearer ' + token
                    // })
                    var auth = 'Bearer '+token
                    // console.log(auth)
                    
                    res.cookie('jwtToken', auth, { maxAge: 900000, httpOnly: true });
                    // req.session.access_token =token;
                    res.redirect("/api/user/new")
                } )
            } else {
                res.status(400).json({msg:'Password Incorrect'})
            }
        })

    })

})

router.get('/new',authorization,(req,res) => {
    res.json({
        id:req.user.id,
        name:req.user.userName
    })
})

function authorization(req,res,next) {
    const auth = req.cookies.jwtToken
    const token = auth && auth.split(' ')[1]
    if(token==null) return res.sendStatus(401)
    jwt.verify(token,secretKey,(err,user)=> {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
router.get('/current',passport.authenticate('jwt',{
    successRedirect: '/api/user/test',
      failureRedirect: '/api/user/access',
      session: false
}))

module.exports = router
