soe.controller('mainctrl', function ($scope, $localStorage, $state, $ionicHistory, $ionicTabsDelegate) {

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

});

