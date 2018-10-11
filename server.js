//install this before writing the code
//npm install express --save (https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)
var express = require('express');
var app = express();
//declare this
var path=require('path');
var bodyParser = require("body-parser");

app.get('/', function (req, res) {
   res.send('Hello World');
})

//make the different pages
app.get('/products',function(req,res){
    res.send('Helo from products');
})

//part 5 of the lab
app.get('/hello/:name',function(req,res){
    console.log(req.params.name);
    res.send('Hello '+req.params.name);
})

//part 6
app.get("/api/posts",(req,res,next)=>{
    const posts=[
        {
            id: "fadf124211",
            title: "First ever sever",
            content: "This is coming from the server"
        },
        {
            id: "ksajflaj132",
            title: "Second server-side post",
            content: "This is coming from the server!"             
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

//use path here which was declared at the top
//html file from moodle
app.get('/test',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});


//use bodyParser here
//this is done to use the post method instead of get
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/name',function(req,res){
    console.log("post method");
    console.log(req.body.firstname);
    res.send('Hello '+ req.body.firstname + " " + req.body.lastname);
});

app.get('/name',function(req,res){
    console.log("get method");
    console.log(req.query.lastname);
    res.send('Hello '+req.query.firstname + " " + req.query.lastname);
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})