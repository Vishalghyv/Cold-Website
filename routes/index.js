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
router.get('/constitution', (req,res) => {
    res.download('public/pdfs/constitution.pdf')
})


module.exports = router
