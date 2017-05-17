soe.controller('mainctrl', function ($scope, $localStorage, $state, $ionicHistory, $ionicTabsDelegate, $timeout) {

  // The functions below are called to avoid ionic history based navigation.
  $scope.openFeedView = function () {
    $state.go('tab.dash');
  };

  $scope.openAttendanceView = function () {
    $state.go('tab.attendance');
  };

  $scope.openFeedbackView = function () {
    $state.go('tab.feedback');
  }

    // Navigate use to login page if not logged in
  if ($localStorage.soe_user_status == 0) {
    $ionicHistory.nextViewOptions({
       disableBack: true
    });
    $state.go('tab.login');
  } else {
    $state.go('tab.dash');
  }

  $scope.status = $localStorage.soe_user_status;

});

