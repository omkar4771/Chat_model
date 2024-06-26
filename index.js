const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname ,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));


main()
.then(()=>{
    console.log("connection sucessfull");
})
.catch((err)=>{
    console.log("err");
});
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


// let chat1 = new Chat ({
//     from: "omkar",
//     to: "shubham",
//     msg: "hello",
//     created_at: new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//home route
app.get("/",(req,res)=>{
    res.send("working");
});
//index route
app.get("/chats",async (req,res)=>{
    const chats = await Chat.find();
    res.render("chats.ejs",{chats});
});
//new routes
app.get("/chats/new",(req,res)=>{
    throw new ExpressError(404,"page not found");
    res.render("new.ejs");
})

//new routes
app.get("/chats/:name", async(req,res)=>{
    let {name} = req.params;
    const chats = await Chat.find();
    res.render("new.ejs",{chats,name});
});

//error handling middleware
app.use((err,req,res,next)=>{
    let{ status = 500, message = "Some error occure"} = err;
    res.status(status).send(message);
})
//server starts
app.listen(8080,()=>{
    console.log("app is listening on port 8080");
});
