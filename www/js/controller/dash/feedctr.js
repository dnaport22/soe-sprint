soe.controller('DashCtrl', function($state, $ionicHistory, $scope, $http, $ionicPlatform, $location, $timeout, $localStorage, UIfactory, soeData_URL, $templateCache, $ionicScrollDelegate, $rootScope, $ionicTabsDelegate) {
  $rootScope.slideHeader = false;
  $rootScope.pixelLimit = 0;

  $scope.$on("$ionicView.beforeEnter", function () {
    $ionicTabsDelegate.showBar(true);
  });

  $scope.goForward = function () {
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != 0) {
      $ionicTabsDelegate.select(selected + 1);
    }
  };

  /**
   * Loading spinner
   */
  UIfactory.showSpinner();

  /**
   * Home page view list & grid
   */
  $scope.viewType = 'list';
  $scope.changeToGrid = function(type) {
    if(type == 'list') {
      $scope.viewType = 'grid';
    }
    else if (type == 'grid') {
      $scope.viewType = 'list';
    }
  };

  /**
   * Variables and array to store and retrieve items
   */
  $scope.items = [];
  var offset = 0;
  var limit = 10;
  var retrieved = 0;

  /**
   * Description: loadMore() function is used to retrieve items from the server.
   * Params: offset => last position of the items fetched,
   *         limit => number of items to be fetched (default = 10),
   *         filter => serach input
   * @return items from the server $scope.items[]
   */
  $scope.loadMore = function() {
    $http({ url: soeData_URL.GET_ALL_ITEM_URL, method: soeData_URL.GET_ALL_ITEM_TYPE, cache: $templateCache}).success(function(response) {
        $scope.processData(response);
//        retrieved = response.items.length
//        offset += retrieved
        //$scope.$broadcast('scroll.refreshComplete');
        //$scope.$broadcast('scroll.infiniteScrollComplete');
        UIfactory.hideSpinner();
    }).error(function(error) {
      $scope.loadMore();
    });
  };

  $scope.processData = function(data) {
    for (i = 0; i < data.length; i++) {
      $scope.items = $scope.items.concat(data[i]);
    }
  };
  
  /**
   * Description: search() function is called on ng-change in search input field,
   * it calls the loadMore() function and display clear button in the input field.
   */
  $scope.inputVal = false;
  $scope.search = function(filter) {
    $scope.inputVal = true;
    $scope.items = [];
    offset = 0;
    $scope.loadMore();
  };

  $scope.pullToRefresh = function() {
    $scope.items = [];
    offset = 0;
    $templateCache.removeAll();
    $scope.loadMore();
  };

  /**
   * Description: check() function is called by infinite scroll to check if there
   * are items in the $scope.items array.
   */
  $scope.check = function() {
    return retrieved > 0
  };
  
  $scope.$on('$ionicView.loaded', function() {
      $scope.loadMore();
  });
  
  $scope.reloadData = function() {
    $state.go($state.current, {reload: true, inherit: false})
    $scope.$broadcast('scroll.refreshComplete');
  };

  /**
   * Description: clears input field and hide clear button.
   */
  $scope.clearInput = function() {
    inputVal.setValue('search', '');
    $scope.inputVal = false;
    $scope.items = [];
    offset = 0;
    $scope.loadMore();
  };

  $scope.fullView = function (feed_title, feed_body, feed_img) {
    $location.path('/tab/fullfeed/' + feed_title + '/' + feed_body );
  };

  /**
   * This is redirect the user to app.userguide state,
   * if the user has open the app for first time.
   */
  if($localStorage.app_launch_activity == 0) {
    UIfactory.showSpinner();
    $state.go('app.userguide');
  }
 });

soe.filter('htmlToPlaintext', function() {
  return function(text) {
    return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
});