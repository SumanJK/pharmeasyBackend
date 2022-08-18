const express=require("express")
const connect=require("./configs/db")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


const carousalController=require("./controller/carousalData.controller.js");
app.use("/carousalDatas",carousalController)

const productsController=require("./controller/products.controller.js");
app.use("/products",productsController)

const loginAuth=require("./controller/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controller/auth.controller.js")
app.use("/",RegisterAuth)


const cart= require("./controller/cart.controller.js")
app.use("/cart",cart)


const port = process.env.PORT || 3000

app.listen(port,async function(){
    try {
        await connect()
           console.log("port 3000 is working properly")
    } catch (error) {
         console.log(error.message)
    }
})
