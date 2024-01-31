const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

// app.use(cors(corsOptions))
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aman:Aman2122@cluster0.6j5f5pb.mongodb.net/?retryWrites=true&w=majority");

const user = require('./userModel')

async function insert(){
    await user.create({
        name: "Aman",
        password: 1234
    });
}

insert();

app.get('/' , (req,res)=>{
    res.send("Home")
})

app.get('/signup' , (req,res)=>{
    res.send("Signup")
})

app.post("/signup" , async (req,res)=>{
    const data = {
       name : req.body.username,
       password : req.body.password
    }

    await user.insertMany([data])

    res.render("Home")
})


http.listen(3000 , ()=>{
    console.log("Server is running")
})