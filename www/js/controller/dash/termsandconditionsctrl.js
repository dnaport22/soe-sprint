soe.controller('termsandconditionsctrl', function($scope, $ionicTabsDelegate) {
  $scope.$on("$ionicView.beforeEnter", function () {
    $ionicTabsDelegate.showBar(true);
  });
});