soe.controller('settingsctrl', function ($scope, $ionicTabsDelegate, $ionicHistory, $state, $localStorage) {
  	$ionicTabsDelegate.showBar(false);

  	$scope.username = $localStorage.soe_user_username;
  
	$scope.notificationHandler = function (event) {
		//make call to the backend
		console.log(event.target.checked);
	};

	$scope.openAbout = function () {
		$state.go('tab.about');
	};

	$scope.openPrivacyPolicy = function () {
		$state.go('tab.privacypolicy');
	};

	$scope.openTermsAndConditions = function () {
		$state.go('tab.termsandconditions');
	};

	$scope.logoutUser = function () {
		$localStorage.soe_user_status = 0;
	    $localStorage.soe_user_username = null;
	    $localStorage.soe_user_email = null;
	    $localStorage.soe_user_token = null;
	    $localStorage.expiry = null;
	    $ionicHistory.nextViewOptions({disableBack: true});
		$state.go('tab.login', {reload: true, inherit: false});
	};

});
