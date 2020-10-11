const express = require('express');
const path = require('path'); 
const app =express();
const members = require('./members'); 
const logger = require('./middleware/logger')
const PORT = process.env.PORT || 5000;
 
app.use(logger) 


app.get('/api/members', (req,res)=>{
  res.json(members);
});

//set up a static folder 
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,()=>{
  console.log(`The server is listening on port ${PORT}`)
});  

