soe.controller('navctrl', function ($scope, $state) {
	$scope.openSettings = function () {
		$state.go('tab.settings')
	}
});
