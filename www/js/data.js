soe.constant('soeData_URL', {
  GET_ALL_ITEM_URL: 'http://soe-backend.sytes.net/api/news-full?_format=json',
  GET_ALL_ITEM_TYPE: 'GET',
  LOGIN_USER_URL: 'http://soe-backend.sytes.net/lsbu/soe?entity=user&type=login',
  LOGIN_USER_TYPE: 'POST',
  REGISTER_USER_URL: 'http://service.mysoe.xyz/register.php',
  REGISTER_USER_TYPE: 'POST',
  GET_USER_ITEM_URL: 'http://service.mysoe.xyz/myitems.php',
  GET_USER_ITEM_TYPE:'GET',
  DELETE_USER_ITEM_URL: 'http://service.mysoe.xyz/dismiss.php',
  DELETE_USER_ITEM_TYPE: 'POST',
  POST_ITEM_URL: 'http://service.mysoe.xyz/postitem.php',
  POST_ITEM_TYPE: 'POST',
  REQUEST_ITEM_URL: 'http://service.mysoe.xyz/message.php',
  REQUEST_ITEM_TYPE: 'POST',
  RESET_REQUEST_URL: 'http://service.mysoe.xyz/forgotpass_request.php',
  RESET_REQUEST_TYPE: 'POST',
  RESET_VERIFY_URL: 'http://service.mysoe.xyz/forgotpass_verify.php',
  RESET_VERIFY_TYPE: 'POST',
  GIVEN_AWAY_ITEM: 'http://service.mysoe.xyz/givenaway.php',
  GIVEN_AWAY_TYPE: 'POST',
  RE_APPROVE_ITEM: 'http://service.mysoe.xyz/reapprove.php',
  RE_APPROVE_TYPE: 'POST'

})

soe.constant('soeData_AUTH', {
  LOGIN_EMAIL: 'login_email',
  LOGIN_PASS: 'login_pass',
  REGISTER_NAME: 'set_name',
  REGISTER_EMAIL: 'set_email',
  REGISTER_PASS: 'set_pass',
  REGISTER_PASS_VALIDATE: 'set_pass2',
})

soe.constant('soeData_POSTITEM', {
  ITEM_NAME: 'name',
  ITEM_DESC: 'desc',
  ITEM_IMAGE: 'upImage',
})

soe.constant('soeData_REQUESTITEM', {
  USER_MESSAGE: 'user_message',
})

soe.constant('soeData_RESETPASS', {
  RESET_REQUEST: 'reset_email',
  RESET_PASS: 'reset_pass',
  RESET_PASS_VALIDATE: 'reset_pass2'
})
