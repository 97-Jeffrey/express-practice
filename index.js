const express = require('express');
const path = require('path');
const app = express();
const members = require('./members');
const logger = require('./middleware/logger')
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger)

//get all members:
app.get('/api/members', (req, res) => {
  res.json(members);
});

//get single members:
app.get('/api/members/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else{
    res.status(400).json({ msg: 'member not found'});
  }
})


app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
});

