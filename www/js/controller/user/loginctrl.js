soe.controller('loginctrl', function($scope, $state, $ionicSideMenuDelegate, $ionicHistory, $stateParams, $localStorage, soeData_AUTH, soeData_URL, UserFactory, UIfactory, LoginNotifications, $ionicNavBarDelegate, $ionicTabsDelegate) {
  UIfactory.hideSpinner();
  $scope.loginMessage = null;
  $ionicTabsDelegate.showBar(false);

  var EmailId = soeData_AUTH.LOGIN_EMAIL;
  var PassId = soeData_AUTH.LOGIN_PASS;
  const BASE_URL = soeData_URL.LOGIN_USER_URL;

  $scope.loginUser = function () {
    UIfactory.showSpinner();
    var login_data = {
      email: inputVal.getValue(EmailId),
      password: inputVal.getValue(PassId)
    };
    var login = new UserFactory;
    login.loginCredentials(login_data.email, login_data.password);
    var cleanEmail = login.cleanEmail();
    if(login.validateEmail(cleanEmail) == true) {
      var loginFormSubmit = new Submitform('POST', BASE_URL, JSON.stringify(login.loginFormData()), false);
      loginFormSubmit.ajaxSubmit(this)
    }
  };

  $scope.onSuccess = function (response) {
    if (response.status == 0) {
      UIfactory.hideSpinner();
      return UIfactory.showAlert('Alert', LoginNotifications.INVALID_ACCOUNT);
    }
    else if(response.status == 1) {
      UIfactory.hideSpinner();
      return userStorage(response.body);
    }
  };

  $scope.onError = function (error) {
    UIfactory.showAlert('Alert', LoginNotifications.ERROR_LOGIN);
  };

  var userStorage = function (data) {
    $localStorage.soe_user_status = 1;
    $localStorage.soe_user_username = data.username;
    $localStorage.soe_user_email = data.email;
    $localStorage.soe_user_token = data.uid;
    $localStorage.expiry = new Date().getTime();
    return reloadForm();
  };

  var reloadForm = function() {
    inputVal.setValue(EmailId, '');
    inputVal.setValue(PassId, '');
    $ionicNavBarDelegate.showBackButton(false);
    return $state.go('tab.dash');
  };

  $scope.redirectUser = function (path) {
    UIfactory.showSpinner();
    if (path == 'register') {
      UIfactory.hideSpinner();
      $state.go('tab.register')
    }
    else if (path == 'forgot') {
      UIfactory.hideSpinner();
      $state.go('tab.resetrequest');
    }
  };



});
