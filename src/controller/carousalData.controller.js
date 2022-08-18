const carousalData=require("../model/carousalData.model.js")
const express=require("express")
const User = require("../model/auth.model.js")
const router =express.Router()


router.post("",async(req,res)=>{
    try{
const carousal=await CarousalDataSchema.create(req.body)
res.send(carousal)
    }catch(err){
return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
const carousal=await CarousalDataSchema.find().lean().exec()
res.send(carousal)
    }catch(err){
return res.status(500).send(err.message)
    }
})

module.exports = router
