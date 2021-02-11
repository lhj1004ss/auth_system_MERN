const mongoose = require('mongoose');
const Schema = require('mongoose');
const { User } = require('./User');

const postSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  name: {
    type: String,
    ref:'User'
  },
  title: {
    type: String,
    maxlength: 50
  },
  stroy: {
    type: String
  },
  category: {
    type: String
  },
  view: {
    type: Number,
    default: -2
  }
},{ timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = { Post }