'use strict';

angular.module('barterApp')
  .controller('CoursesCtrl', function ($scope,CourseService) {
    $scope.selectedCourse = undefined;
    /*
    Calls CourseService to make get request to 
    Retrieve all Courses saved on DB
    */
    var coursePromise = function(){
      CourseService.getCourses()
        .then(function(data){
            var data1 = data;
            var data2 = data;
            $scope.coursesForHas = data1;
            $scope.coursesForNeeds = data2;
        });
    };

    coursePromise();
    


    //Scope Variable for Courses student Has
    $scope.hasCourses = [];

    //Scope Variable for Courses Student Needs
    $scope.needCourses = [];

    $scope.userEmail = '';

    //Add course to what they have
    $scope.addHas = function(){
      var course = '';
      $scope.hasCourses.push(course);
      
    };

    //Add course to what they need
    $scope.addNeed = function(index){
      var course = '';
      $scope.needCourses.push(course);
      
    };

    //Function for when they select Course
    $scope.onSelectHas = function ($index,$model) {
      $scope.hasCourses[$index] = $model;
      console.log('model:', $model);
      console.log('courseforhas: ', $scope.coursesForHas);
      for(var course in $scope.coursesForHas){
        if($scope.coursesForHas[course].Link == $model){
          $scope.coursesForHas.splice(course,1);
        }
      }
      
    };

    //Function for when they select Course
    $scope.onSelectNeed = function ($index,$model) {
      $scope.needCourses[$index] = $model;
      console.log('index:', $index);
      for(var course in $scope.coursesForNeeds){
        if($scope.coursesForNeeds[course].Link == $model){
          $scope.coursesForNeeds.splice(course,1);
        }
      }
    };

    //Delete course they have
    $scope.removeCourseHas = function($index){
      var courseTitle = $scope.hasCourses[$index];
      console.log($scope.coursesForHas[1]);
      var course = {
        'Link' : courseTitle
      };
      $scope.coursesForHas.push(course);
      $scope.hasCourses.splice($index,1);
      $scope.coursesForHas.sort(function(a, b){return a-b});
      console.log('hasCourses: ', $scope.coursesForHas);
    };

    //Delete course they need
    $scope.removeCourseNeed = function($index){
      var courseTitle = $scope.needCourses[$index];
      var course = {
        'Link' : courseTitle
      };
      $scope.coursesForNeeds.push(course);
      $scope.coursesForNeeds.sort(function(a, b){return a-b});
      $scope.needCourses.splice($index,1);
    };

    $scope.sendForm = function(form){
      console.log('form:', form);
      var action = "//onmodulus.us9.list-manage.com/subscribe/post?u=18646592d53563b1667bad389&amp;id=15ab176ddf";
    }
  });
