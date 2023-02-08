let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Book = require('../models/books');
//we want to display the bookList
module.exports.displayBook