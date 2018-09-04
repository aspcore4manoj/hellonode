var express = require("express")
var app = express();
var router = express.Router();


router.get("/",function(req,res){
    res.send("Hello node")
});

app.use('/',router);

app.listen(4000);
