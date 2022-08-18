const express = require('express')
const router = express.Router()
const User=require("../model/auth.model.js")

router.post('/login', (req, res) => {
    const {  email, password } = req.body
       User.findOne({email:email},(err,user)=>{
           if(user){
                if(password===user.password){
                    res.send({ message:"Login successful",user:user})
                }else{
                    res.send({message:"Password didn't match"})
                }
           }else{
            res.send({message:"User isn't Registered"})
           }
       })
})
router.post('/register', (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'User already Registered' })
    } else {
      const user = new User({
        name,
        email,
        password,
      })
      user.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'Successfully registered' })
        }
      })
    }
  })
})
module.exports = router