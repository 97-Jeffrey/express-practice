const express = require('express');
const router = express.Router();
const members = require('../../members');

//get all members:
router.get('/', (req, res) => {
  res.json(members);
});

//get single members:
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else{
    res.status(400).json({ msg: 'member not found'});
  }
})

//create members:
router.post('/',(req,res)=>{
  const newMember={
    
  }
})
module.exports =router;