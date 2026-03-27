let posts = require("../models/postModel");

// CREATE
exports.createPost = (req, res) => {
    const { title, content } = req.body;

    const newPost = {
        id: posts.length + 1,
        title,
        content,
        image: req.file ? req.file.filename : null
    };

    posts.push(newPost);
    res.json(newPost);
};

// READ
exports.getPosts = (req, res) => {
    res.json(posts);
};

// UPDATE
exports.updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    const post = posts.find(p => p.id === id);

    if (!post) return res.status(404).send("Post not found");

    post.title = title;
    post.content = content;

    res.json(post);
};

// DELETE
exports.deletePost = (req, res) => {
    const id = parseInt(req.params.id);

    posts = posts.filter(p => p.id !== id);

    res.send("Post deleted");
};