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
    $ionicHistory.nextViewOptions({
       disableBack: true
    });
    $state.go('tab.login');
  } else {
    $state.go('tab.dash');
  }

  $scope.status = $localStorage.soe_user_status;

});

