var artistControllers = angular.module('bcsCollectControllers',['ngAnimate','ngGrid', 'ui.autocomplete', 'ngRoute', 'ui.router',
        'ui.bootstrap.datetimepicker', 'ui.bootstrap', 'ngAnimate','angularjs-dropdown-multiselect','ngFileUpload','remoteValidation','toaster'])
    .constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
}).constant('USER_ROLES', {
  all: '*',
  admin: 'adm',
  editor: 'com'
});
