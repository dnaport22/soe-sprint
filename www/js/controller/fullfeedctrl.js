soe.controller('fullfeedctrl', function ($scope, $stateParams, $ionicTabsDelegate) {
  $ionicTabsDelegate.showBar(false);


  $scope.feed_title = $stateParams.feed_title;
  $scope.feed_body = $stateParams.feed_body;
  $scope.feed_img = $stateParams.feed_img;
});