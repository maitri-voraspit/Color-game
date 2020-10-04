var express= require("express");
var app= express();
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/",function(req,res){
	res.render("colorGame");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
