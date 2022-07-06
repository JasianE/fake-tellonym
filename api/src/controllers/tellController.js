const Tell = require('../models/tell')

exports.add = function(req,res,next){
    console.log(req.body)

    const tell = new Tell({
        message: req.body.message,
        date: new Date()
    }).save(err => {
        if(err){
            console.log(err)
            return next(err)
        } else {
            res.json('Yes')
        }
    })
}

exports.find = function(req,res,next){
    let tells = [] 
    Tell.find({}).exec(function(err, stuff){
        console.log(stuff)
        if(err)return next(err)
        for(let i =0 ; i < stuff.length; i++){
            tells.push(stuff[i])
        }
        res.json(tells)
    })
    
}