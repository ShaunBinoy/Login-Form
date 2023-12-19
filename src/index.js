// const { log } = require("console")
const express = require("express")
const app =express()
const path = require("path")
const hbs = require("hbs")
const LogInModel = require("./mongodb")

const tempelatePath = path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password
    }

    // try {
    //     await LogInModel.insertMany([data], { wtimeout: 1000 });
    //     res.render("home");
    // } catch (error) {
    //     console.error("Error inserting data:", error);
    //     res.status(500).send("Internal Server Error");
    // }
    

    await LogInModel.insertMany([data])

    res.render("login")
    
})

app.post("/login", async (req,res)=>{

    try{
        const check=await LogInModel.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        }

        else{
            res.send("Wrong Password")
        }
        
    }
    catch{
        res.send("Wrong Details")

    }
   
    
})



app.listen(3000,()=>{
    console.log("Port Connected");
})