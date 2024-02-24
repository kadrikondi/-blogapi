const mongoose = require("mongoose");

const Blog = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  blogcontent: { type: String },
  createAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Blog", Blog);
