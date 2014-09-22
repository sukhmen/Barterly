'use strict';
angular.module('barterApp')
  .service('CourseService', function ($http,$q) {
      return{
        getCourses : function(){
          return $http.get('/api/courses')
            .then(function(response){
              if(typeof response.data === 'object'){
                return response.data;
              }
              else{
                return $q.reject(response.data);
              }
            }, function(response){
              return $q.reject(response.data);
            });
        }
      };

    });