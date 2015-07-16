angular.module('MobileA', [
  'ngRoute',
  'mobile-angular-ui',
  'MobileA.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});