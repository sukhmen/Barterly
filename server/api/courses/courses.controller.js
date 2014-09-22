'use strict';

var _ = require('lodash');
var Courses = require('./courses.model');

// Get list of coursess
exports.index = function(req, res) {
  Courses.find(function (err, coursess) {
    if(err) { return handleError(res, err); }
    return res.json(200, coursess);
  });
};

// Get a single courses
exports.show = function(req, res) {
  Courses.findById(req.params.id, function (err, courses) {
    if(err) { return handleError(res, err); }
    if(!courses) { return res.send(404); }
    return res.json(courses);
  });
};

// Creates a new courses in the DB.
exports.create = function(req, res) {
  Courses.create(req.body, function(err, courses) {
    if(err) { return handleError(res, err); }
    return res.json(201, courses);
  });
};

// Updates an existing courses in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Courses.findById(req.params.id, function (err, courses) {
    if (err) { return handleError(res, err); }
    if(!courses) { return res.send(404); }
    var updated = _.merge(courses, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, courses);
    });
  });
};

// Deletes a courses from the DB.
exports.destroy = function(req, res) {
  Courses.findById(req.params.id, function (err, courses) {
    if(err) { return handleError(res, err); }
    if(!courses) { return res.send(404); }
    courses.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}