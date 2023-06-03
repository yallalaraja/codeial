const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_controllers');
const postsController = require('../controllers/posts_controller');
router.get('/profile',userController.profile);
router.get('/posts',postsController.posts);
module.exports = router;