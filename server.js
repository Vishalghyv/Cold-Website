if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const passport = require("passport")

const indexRouter = require('./routes/index')
const userRouter = require('./routes/api/Users')

const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
app.use(cookieParser())

const mongoose = require("mongoose")
const connectDB = require('./DB/connect')
connectDB()



//Passport middleware
app.use(passport.initialize())

require('./config/passport.js')(passport)



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/', indexRouter)

app.use('/api/user', userRouter)

app.listen(process.env.PORT || 3000)

