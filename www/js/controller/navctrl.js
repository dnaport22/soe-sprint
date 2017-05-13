soe.controller('navctrl', function ($scope, $state, $ionicHistory, $localStorage) {
	$scope.openSettings = function () {
		$state.go('tab.settings');
	};

	 // Setting up local variables for app navigation logic
	$scope.$storage = $localStorage.$default({
		soe_user_uid: null,
		soe_user_username: null,
		soe_user_token: null,
		soe_user_email: null,
		soe_user_status: 0,
		soe_expiry: 0,
		soe_app_launch_activity: 0
	});

	// Navigate use to login page if not logged in
	if ($localStorage.soe_user_status == 0) {
		$ionicHistory.nextViewOptions({disableBack: false});
		$state.go('tab.login');
	} else {
		$state.go('tab.dash');
	}

	$scope.status = $localStorage.soe_user_status;

	// $ionicHistory.removeBackView();
	$ionicHistory.clearCache();
});
