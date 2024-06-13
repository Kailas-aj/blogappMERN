// const mongoose = require("mongoose")

// const PostSchema = new mongoose.Schema({

//   title:String,
//   description: String,
//   file:String,
//   email:String

// })

// const PostModel = mongoose.model('posts',PostSchema)
// module.exports = PostModel;
const mongoose = require("mongoose");

// Create a Comment schema
const CommentSchema = new mongoose.Schema({
  userId: {
    type: String, // Assuming you're using MongoDB's ObjectIds for user identification
    ref: 'User', // Reference to your User model
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Extend your Post schema
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  file: String,
  email: String, // Assuming this is how you identify which user created the post
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
  }],
  comments: [CommentSchema] // Embedding comments directly into the post document
});

const PostModel = mongoose.model('posts', PostSchema);
module.exports = PostModel;
