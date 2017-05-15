soe.controller('attendancectrl', function($scope, Chats, $ionicTabsDelegate, soeData_URL, $http, $templateCache) {
  $scope.$on("$ionicView.beforeEnter", function () {
    $ionicTabsDelegate.showBar(true);
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.loadAttendance = function() {
    $http({url: soeData_URL.GET_ATTENDANCE_URL,
      method: soeData_URL.GET_ATTENDANCE_TYPE,
      cache: $templateCache}, {withCredentials: true}).success(function(response) {
      //processData(response);
      retrieved = response.length;
      console.log(response)

      UIfactory.hideSpinner();
    }).error(function(error) {
      console.log(error)
      //$scope.loadMore();
    }).finally(function () {
      //$scope.$broadcast('scroll.refreshComplete');
      //$scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.loadAttendance();

});
