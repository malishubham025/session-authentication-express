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
// let count=0;
app.get("/",(req,res)=>{
    req.session.count++;
    // req.x["hello"]=count;
    res.render("index",{count:req.session.count});
});
app.get('/login', (req, res) => {
    // req.session.user = { username: 'JohnDoe', role: 'admin' };  // Set session data
    console.log(req.query);
    req.session.user ={username:req.query.hello,password:req.query.pass}
    res.send('Session data set!');
  });
  
  // Route to access session data
  app.get('/dashboard', (req, res) => {
    if (req.session.user) {
      res.send(`Welcome ${req.session.user.username}, you are logged in as ${req.session.user.password}`);
    } else {
      res.send('Please log in first!');
    }
  });
// app.post("/login",(req,res)=>{
//     // req.session.count++;
//     // console.log(req.session.x["hello"]);
//     res.render("index",{count:req.session.count});
// });

app.listen(3000,()=>{
    console.log("listning...");
})