soe.controller('attendancectrl', function($scope, Chats, $ionicTabsDelegate) {
  $scope.$on("$ionicView.beforeEnter", function () {
    $ionicTabsDelegate.showBar(true);
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
});
