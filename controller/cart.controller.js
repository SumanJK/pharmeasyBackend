const router = require('express').Router()

const User=require("../model/auth.model.js")
const ProductsSchema = require('../model/products.model.js')

router.get("/:id/:product" , async (req, res) => {
    try{
   await User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {Cart : {$each:[req.params.product]}}},{
        new: true
    })
    res.send({message : 'Success'})
    }catch(err){
        res.send({message: "product already added"})
    }

})

router.delete("/cartitemdelete/:id/:productid" , async(req, res) =>{

    try{
      await User.updateOne({_id: req.params.id } , {'$pull' : {"Cart" : req.params.productid}} ,{ new : true})
      
      res.send({ error : false , message : "product delete"})
    }catch(err){
      console.log(err)
    }
  
  })
router.get("/product/products/:id", async (req, res) => {
    if(req.params.id === undefined){
     return res.send("user is not logged in")
    }
  
    try{
      const user = await User.findOne({_id: req.params.id});
  
      const AllProduct = await ProductsSchema.find({ '_id': { $in:  user.Cart } });
  
      res.send(AllProduct)
      
    }catch(err){
      console.log(err)
    }
  
  })

module.exports = router