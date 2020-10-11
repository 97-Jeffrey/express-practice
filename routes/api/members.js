const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');
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
    id: uuid.v4(),
    name:req.body.name,
    phone: req.body.phone,
    email: req.body.email
  }
  if(!newMember.name){
   return res.status(400).json({msg: 'please include your name'})
  }
  members.push(newMember);
  res.json(members);
})

//update member:
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    const updateMember = req.body;
    members.forEach(member=>{
      if(member.id === parseInt(req.body.id)){
        member.name = updateMember.name? updateMember.name: member.name;
        member.email = updateMember.email? updateMember.emial: member.email;

        res.json({msg: "Member is updated" ,member})
      }
    })
  } else{
    res.status(400).json({ msg: 'member not found'});
  }
})
module.exports =router;