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

module.exports = router;
