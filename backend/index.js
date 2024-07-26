const express = require('express')
const cors = require("cors")
require('./db/config')
const User = require("./db/user")
const Product = require("./db/product")
const app = express()
const port = 3000;
app.use(express.json())
app.use(cors())

app.post("/register",async(request, response)=>{
    let user = new User(request.body)
    let result = await user.save();
    result = result.toObject()
    delete result.password
    response.send(result)
})

app.post("/login",async (req,res)=>{
    // console.log(req.body)
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password")
        user ? res.send(user) : res.send({result:"No user Found"})
    }else{
        res.send({result:"No user Found"})
    }
})

app.post('/add-product', async (req, res)=>{
    let product = new Product(req.body)
    let result = await product.save()
    res.send(result)
})

app.listen(port,()=>console.log(`http://localhost:${port}`))