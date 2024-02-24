const express = require("express");
const router = express.Router();
const blogcontroller = require("../controller/blogcontroller");

// routes

router.get("/", blogcontroller.displayHome);
router.post("/create-blog", blogcontroller.createBlogPost);
router.put("/blog/:id", blogcontroller.editBlogPost);
// Route to get all blog posts
router.get("/blogs", blogcontroller.getAllBlogPosts);

// Route to get a single blog post by ID
router.get("/blogs/:id", blogcontroller.getBlogPostById);

// Route to delete a blog post
router.delete("/blogs/:id", blogcontroller.deleteBlogPost);

module.exports = router;
