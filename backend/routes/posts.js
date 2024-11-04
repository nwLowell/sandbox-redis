const express = require('express');
const router = express.Router();

const Posts = require('../models/posts');

const posts = new Posts();

router.get('/', function(req, res, next) {
  posts.get(req, res);
});

router.get('/:id', function(req, res, next) {
  posts.getById(req, res);
});

router.post('/', async function(req, res, next) {
  posts.add(req, res);
});

module.exports = router;
