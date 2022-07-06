const express = require('express')
const app = express()
const mongoose = require('mongoose')
const indexRouter = require('./routes/index')
const path = require('path')
const cors = require('cors')

mongoose.connect('mongodb+srv://Esam:greendayrocks56@cluster0.4dghv.mongodb.net/tellonym?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
const port = 3000
db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.set('views', path.join(__dirname, 'views'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', indexRouter)
app.post('/post', indexRouter)
app.get('/find', indexRouter)

app.listen(port, () => {
    console.log('hi')
})