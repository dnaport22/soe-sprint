soe.controller('settingsctrl', function ($scope, $ionicTabsDelegate, $ionicHistory) {
  $ionicTabsDelegate.showBar(false);
  
  $scope.notificationHandler = function (event) {
  	//make call to the backend
  	console.log(event.target.checked);
  }

});
