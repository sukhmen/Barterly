'use strict';

angular.module('barterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: 'app/confirmation/confirmation.html',
        controller: 'ConfirmationCtrl'
      });
  });