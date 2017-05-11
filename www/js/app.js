// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var soe = angular.module('soe', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'mainctrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.attendance', {
    url: '/attendance',
    views: {
      'tab-attendance': {
        templateUrl: 'templates/tab-attendance.html',
        controller: 'attendancectrl'
      }
    }
  })

  .state('tab.feedback', {
    url: '/feedback',
    views: {
      'tab-feedback': {
        templateUrl: 'templates/tab-feedback.html',
        controller: 'feedbackctrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-dash': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsctrl'
      }
    }
  })

  .state('tab.login', {
    url: '/login',
    views: {
      'tab-dash': {
        templateUrl: 'templates/user/login.html',
        controller: 'loginctrl'
      }
    }
  })

  .state('tab.register', {
    url: '/register',
    views: {
      'tab-dash': {
        templateUrl: 'templates/user/register.html',
        controller: 'registerctrl'
      }
    }
  })

  .state('tab.resetpass', {
    url: '/resetpass',
    views: {
      'tab-dash': {
        templateUrl: 'templates/user/resetpass.html',
        controller: 'resetpassctrl'
      }
    }
  })

  .state('tab.resetrequest', {
    url: '/resetrequest',
    views: {
      'tab-dash': {
        templateUrl: 'templates/user/resetrequest.html',
        controller: 'requestresetctrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
});
