const Blog = require("../model/blog");

// display home

exports.displayHome = (req, res) => {
  res.send("welcome to nodejas");
};
// add blogpost

exports.createBlogPost = async (req, res) => {
  //   const body = req.body;

  if (req.body.title == "" || !req.body.blogcontent || !req.body.author) {
    res.json({
      message: "fill all require field",
    });
  } else if (req.body.title.length < 10) {
    res.json({
      message: "title can not less 10 character",
    });
  } else {
    const newBlog = await Blog.create({
      title: req.body.title,
      blogcontent: req.body.blogcontent,
      author: req.body.author,
    });

    res.json({
      message: "success blog post",
      blog: newBlog,
    });
  }
};

// Assuming you have a Blog model imported and initialized

// Edit a blog post
exports.editBlogPost = async (req, res) => {
  const { id } = req.params; // Assuming the blog post id is passed in the URL parameters
  const { title, blogcontent, author } = req.body;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Update blog post fields if provided
    if (title) blog.title = title;
    if (blogcontent) blog.blogcontent = blogcontent;
    if (author) blog.author = author;

    // Save the updated blog post
    await blog.save();

    res.json({ message: "Blog post updated successfully", blog });
  } catch (error) {
    console.error("Error editing blog post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  const { id } = req.params; // Assuming the blog post id is passed in the URL parameters

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Delete the blog post
    await blog.remove();

    res.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Assuming you have a Blog model imported and initialized

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single blog post by ID
exports.getBlogPostById = async (req, res) => {
  const { id } = req.params; // Assuming the blog post id is passed in the URL parameters

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
