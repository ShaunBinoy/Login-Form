const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/LoginSignUp")
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUp")

.then(()=>{
    console.log("Mongo Connected");
})

.catch((err)=>{
    console.log("Failed to Connect",err);
})

const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})


const LogInModel = new mongoose.model("LoginCollection", LogInSchema);

module.exports=LogInModel;