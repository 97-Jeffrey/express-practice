const express = require('express');
const path = require('path'); 
const app =express();
const members = require('./members'); 
const PORT = process.env.PORT || 5000;

const logger=(req,res, next)=>{
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next()
}

app.use(logger) 


app.get('/api/members', (req,res)=>{
  res.json(members);
});

//set up a static folder 
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,()=>{
  console.log(`The server is listening on port ${PORT}`)
});  

