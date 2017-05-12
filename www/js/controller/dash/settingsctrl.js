soe.controller('settingsctrl', function ($scope, $ionicTabsDelegate, $ionicHistory, $state) {
  $ionicTabsDelegate.showBar(false);
  
	$scope.notificationHandler = function (event) {
		//make call to the backend
		console.log(event.target.checked);
	}

	$scope.openTermsAndConditions = function () {
		$state.go('tab.termsandconditions');
	};

});
