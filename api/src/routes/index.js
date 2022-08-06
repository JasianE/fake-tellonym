const express = require('express')
const router = express.Router()
const tellController = require('../controllers/tellController')

router.get('/', (req,res,next) => {
    res.json('hello')
})

router.get('/favicon.ico', (rqe,res,next) => {
    res.json('hello')
})

router.get('/find', tellController.find)

router.post('/post', tellController.add)

module.exports = router