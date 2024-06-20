const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection sucessfull");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

Chat.insertMany([
    {
        from: "rohan",
        to: "omkar",
        msg: "how are u",
        created_at: new Date()
    },
    {
        from: "sahil",
        to: "omkar",
        msg: "where are you ?",
        created_at: new Date()
    },
    {
        from: "prasad",
        to: "omkar",
        msg: "whats happens ?",
        created_at: new Date()
    },
    {
        from :"suraj",
        to:"omkar",
        to : "sooo funny :)",
        created_at: new Date()
    }
]);