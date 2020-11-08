const mongoose = require('mongoose')

const URI = "mongodb+srv://vishal:vishal@cluster0.jcfqk.mongodb.net/COLD?retryWrites=true&w=majority";


const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true , useUnifiedTopology: true})
    console.log("DB connected")
}

module.exports = connectDB
