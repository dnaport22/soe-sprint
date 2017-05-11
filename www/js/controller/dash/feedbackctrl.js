soe.controller('feedbackctrl', function($scope, $ionicTabsDelegate) {
  $scope.$on("$ionicView.beforeEnter", function () {
    $ionicTabsDelegate.showBar(true);
  });
});
