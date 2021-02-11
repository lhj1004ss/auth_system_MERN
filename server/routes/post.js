const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.post('/upload',(req, res) => {
  const newPost = new Post(req.body);
  console.log(newPost);
  newPost.save((err, doc) => {
    if(err) res.status(400).json({success: false, err})
    res.status(200).json({success: true});
  })
})

router.get('/getPosts', (req, res) => {

   Post.find().populate('writer').exec((err, posts) =>{
     if(err) return res.status(400).send(err);
     res.status(200).json({ success: true, posts});
   })
})

module.exports = router;
