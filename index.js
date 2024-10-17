const express=require("express");
const app=express();
const func=require("./func");
const session=require("express-session");
const body=require("body-parser");
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(session({
    secret:"hello-world",
    resave:false,
    saveUninitialized:false
}))
let count=0;
app.get("/",(req,res)=>{
    req.session.count++;
    res.render("index",{count:req.session.count});
});
app.post("/login",(req,res)=>{
    req.session.count++;
    res.render("index",{count:req.session.count});
});

app.listen(3000,()=>{
    console.log("listning...");
})