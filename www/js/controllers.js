angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, $http, CATALOGUE_URL) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.itemsList = {};

  $scope.retrieveItems = function() {

		$http.get(CATALOGUE_URL+'items').then(function(resp)
			{
        if(resp.status != 200)
				{
					return null;
				}
				else
				{
				  $scope.itemsList = resp.data;
				}

				return $scope.itemsList;
			},
			function(err)
			{
			  console.error('ERR', err.status);
			})
  }
});
