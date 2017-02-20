'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('phone/list').success(function(data) {
    $scope.phones = data;
    alert(data);
  }).error(function(erro){
    alert("o erro: "+ erro);
  });

  

  $scope.orderProp = 'name';
});
