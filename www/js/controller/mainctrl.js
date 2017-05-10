soe.controller('mainctrl', function ($scope, $localStorage) {
  $scope.$storage = $localStorage.$default({
    soe_user_login_id: 0,
    soe_user_username: null,
    soe_user_activation: null,
    soe_user_email: null,
    soe_expiry: 0,
    soe_app_launch_activity: 0
  });
});

