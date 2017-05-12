soe.constant('soeData_URL', {
  GET_ALL_ITEM_URL: 'http://soe-backend.sytes.net/api/news-full?_format=json&page=',
  GET_ALL_ITEM_TYPE: 'GET',
  LOGIN_USER_URL: 'http://soe-backend.sytes.net/lsbu/soe?entity=user&type=login',
  LOGIN_USER_TYPE: 'POST',
  REGISTER_USER_URL: 'http://soe-backend.sytes.net/lsbu/soe?entity=user&type=register',
  REGISTER_USER_TYPE: 'POST',
  RESET_REQUEST_URL: 'http://soe-backend.sytes.net/lsbu/soe?entity=user&type=user_request_reset_pass',
  RESET_REQUEST_TYPE: 'POST',
  RESET_VERIFY_URL: 'http://soe-backend.sytes.net/lsbu/soe?entity=user&type=user_reset_pass',
  RESET_VERIFY_TYPE: 'POST',

});

soe.constant('soeData_AUTH', {
  LOGIN_EMAIL: 'login_email',
  LOGIN_PASS: 'login_pass',
  REGISTER_NAME: 'set_name',
  REGISTER_EMAIL: 'set_email',
  REGISTER_PASS: 'set_pass',
  REGISTER_PASS_VALIDATE: 'set_pass2'
});

soe.constant('soeData_POSTITEM', {
  ITEM_NAME: 'name',
  ITEM_DESC: 'desc',
  ITEM_IMAGE: 'upImage'
});

soe.constant('soeData_REQUESTITEM', {
  USER_MESSAGE: 'user_message'
});

soe.constant('soeData_RESETPASS', {
  RESET_REQUEST: 'reset_email',
  RESET_PASS: 'reset_pass',
  RESET_PASS_VALIDATE: 'reset_pass2'
});
