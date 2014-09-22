'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CoursesSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Courses', CoursesSchema);