const express = require('express')
const jwt = require("jsonwebtoken")
const secretKey = 'secret'

const router = express.Router()

router.get('/', (req,res) => {
    res.render('home')
})
router.get('/projects', (req,res) => {
    res.render('projects')
})
router.get('/events', (req,res) => {
    res.render('events')
})
router.get('/community', (req,res) => {
    res.render('community')
})
router.get('/constitution', (req,res) => {
    res.download('public/pdfs/constitution.pdf')
})
router.get('/codeofconduct', (req,res) => {
    res.render('codeofconduct')
})

router.get('/current',authorization,(req,res) => {
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



module.exports = router
