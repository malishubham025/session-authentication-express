function func(req,res,next){
    console.log("hi");
    console.log(__dirname);
    next();
}
module.exports =func;