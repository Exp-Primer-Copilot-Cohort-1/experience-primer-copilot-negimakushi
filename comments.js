// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');
var Post = require('../models/Post');

// Create comment
router.post('/', function(req, res, next) {
    // Create new comment
    var newComment = new Comment({
        content: req.body.content,