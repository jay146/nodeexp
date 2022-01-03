const exp=require('express');
const app=exp();
const port =9000;
app.get('/', function(request, response)  {
response.sendFile(__dirname+"/app.html");
})
app.post("/",function(req,res){
  res.send("thanks for posting");
})

   // used callback function inside get method
   
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