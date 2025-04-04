const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const port = 3000;



const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Authenfication').then(() => console.log('Mongo connected'))

const Schema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
})

Schema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

const User = mongoose.model('User', Schema)

app.post('/register', async (req, res) => {
    try {
        const {username, password} = req.body
        const user = new User({username, password})
        await user.save()
        res.status(201).json({message: 'new user added'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

app.post('/login', async (req, res) => {

    const {username, password} = req.body
    const user = await User.findOne({ username })
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!user || !isPasswordValid) {
        return res.status(401).json({error: 'invalid compare'})
    }

    res.json({message: 'login successful'})
})

app.listen(port, function() {
    console.log(`Сервер запущен: http://localhost:${port}`)
});