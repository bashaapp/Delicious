const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignupModel')
const bcrypt = require('bcrypt')
const joi = require('@hapi/joi')


// Validation schemas
const signupValidationSchema = joi.object({

    fullName: joi.string().min(3).max(20).required(),
    username: joi.string().min(3).max(20).required(),
    email: joi.string().required().email(),
    password: joi.string().required(),
  });

  const loginValidationSchema = joi.object({
    username: joi.string().max(20).required(),
    password: joi.string().required()
  });

router.post('/signup',async(request, response)=>{
    
  
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



    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password: securePassword
    })

    signedUpUser.save()
    .then(data =>{
        response.status(200).send({ message:'New User Added!' });
        console.log("User Added!");
    })
    .catch(error=>{
        response.json({error:error.message})
       // console.log("email or username is eixsted!");
    })
})

//=================================================================
// login an user
router.route('/login').post(async (req, res) => {

    
      // validate the data before login an user
      const validatedData = loginValidationSchema.validate(req.body);
      if (validatedData.error) {
        return res.status(400).send(validatedData.error.details[0].message);
      }
  
      // check if the user is already in the database
      const user = await signUpTemplateCopy.findOne({ $or: [{username: req.body.username}, {email: req.body.email}] });
      // check if the email exists
      if (!user) throw Error("Lginin fail: username or email does not exist");
  
      // check if the password is correct
      const pwMatch = await bcrypt.compare(req.body.password, user.password);
      if (!pwMatch) throw Error("Login fail: invalid password")
  
     
  
   
  });
  

module.exports = router