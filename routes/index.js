const express = require('express')

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


module.exports = router
