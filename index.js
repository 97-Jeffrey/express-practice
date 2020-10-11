const express = require('express');

const app =express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
  res.send('<h1>heyheyhey wcccc</h1>')
})

app.listen(PORT,()=>{
  console.log(`The server is listening on port ${PORT}`)
});  

