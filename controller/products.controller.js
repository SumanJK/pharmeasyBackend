const ProductsSchema=require("../model/products.model.js")
const express=require("express")
const router =express.Router()


router.post("",async(req,res)=>{
    try{
const products=await ProductsSchema.create(req.body)
res.send(products)
    }catch(err){
return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
const products=await ProductsSchema.find().lean().exec()
res.send(products)
    }catch(err){
return res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
  try{
       const mainproduct=await ProductsSchema.findById(req.params.id).lean().exec()
       return res.status(200).send(mainproduct);
  }
  catch(err){
      return res.status(500).send(err.message)
  }
})
router.get("/sort/asc",async(req,res)=>{
    try {
      const data = await ProductsSchema.find().sort({newPrice:1}).lean().exec()
      res.send(data)
    } catch (error) {
      return res.status(500).send(err.message)
    }
  })
  router.get("/sort/desc",async(req,res)=>{
    try {
      const data = await ProductsSchema.find().sort({newPrice:-1}).lean().exec()
      res.send(data)
    } catch (error) {
      return res.status(500).send(err.message)
    }
  })

  router.get("/filter/company/:value",async(req,res)=>{
 
    try {
      const data = await ProductsSchema.find({company:req.params.value})
      res.status(200).json(data)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

  router.get("/search/:key", async (req, res) => {

    try {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        let result= capitalizeFirstLetter(req.params.key);
        
        const searchCompany= await ProductsSchema.find(
            {
                "$or": [
                    {"company":{$regex: result}}
                ]
            }
        ).lean().exec();
        return res.status(200).send(searchCompany);

    }catch (err) {

        return res.status(500).send(err.message);
    }
});

module.exports = router
