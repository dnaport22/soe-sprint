soe.controller('navctrl', function ($scope, $state, $ionicHistory) {
	$scope.openSettings = function () {
		$state.go('tab.settings');
	}


  // $ionicHistory.removeBackView();
  $ionicHistory.clearCache();
});
