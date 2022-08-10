const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
      //  maxlength: [20, 'full name too long'],
      //  minlength: [3, 'full name too short']
    },
    username:{
        type:String,
        required:true,
      //  maxlength: [20, 'username too long'],
       // minlength: [3, 'username too short']
    },
    email:{
        type:String,
        required:'Email address cannot be left blank.',
   
   
    },
    password:{
        type:String,
        required:true,
      //  maxlength: [20, 'password too long'],
       // minlength: [3, 'password too short']
    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('mytable', signUpTemplate)