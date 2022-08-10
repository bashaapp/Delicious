const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignupModel')
const bcrypt = require('bcrypt');
const joi = require('@hapi/joi');


// Validation schemas
const signupValidationSchema = joi.object({
    fullName: joi.string().min(3).max(20).required(),
    username: joi.string().max(20).required(),
    email: joi.string().required().email(),
    password: joi.string().required(),
  
  });



router.post('/signup',async(request, response)=>{


    try {
        // validate the data
        const validatedData = signupValidationSchema.validate(request.body);
        if (validatedData.error) {
          return response.status(400).send(validatedData.error.details[0].message);
        }    
        // check if the user is already in the database
        const emailExist = await signUpTemplateCopy.findOne({ email: request.body.email });
        const usernameExist = await signUpTemplateCopy.findOne({ username: request.body.username });
        if (emailExist) throw Error("Signup fail: email already exist");
        if (usernameExist) throw Error("Signup fail: username already exist");
   
   
   
        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Error using bcrypt');
        const securePassword = await bcrypt.hash(request.body.password, salt);
        if (!hash) throw Error('Error hashing password');

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })
}
catch (error) {
    response.json(error)
  }
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports = router