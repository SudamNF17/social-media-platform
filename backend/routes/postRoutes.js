const express = require("express");
const router = express.Router();

const {
    createPost,
    getPosts,
    updatePost,
    deletePost
} = require("../controllers/postController");

const upload = require("../middleware/uploadMiddleware");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, upload.single("image"), createPost);router.get("/", getPosts);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;