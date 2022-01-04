const exp=require('express');
const app=exp();
const port =9000;
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
   // extende true allow us to post nested objects
app.get('/', function(request, response)  {
response.sendFile(__dirname+"/app.html");
})
app.post("/",function(req,res){
  //console.log(req.body.num1);
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
var result=num1+num2;

  res.send("the result of the calculation is "+result);
})
app.listen(port, () => {
     console.log(`"server running at port" http://localhost:${port}`)
   })


  //  app.get("/hobbies",(req,res)=>{
  //       res.send(`<ul >
  //       <li>coffee</li>
  //       <li>tennis</li>
  //       <li>code</li>
  //       </ul>`);
   //})