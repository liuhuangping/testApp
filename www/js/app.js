// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js


  //配置$ionicConfigProvider使tabs导航在底部
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');


  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',

      }
    }
  })
  .state('tab.rules', {
    url: '/rules',
    views: {
      'tab-home': {
        templateUrl: 'templates/rules.html',
        controller: 'RulesCtrl'
      }
    }
  })

  .state('tab.rules-detail', {
    url: '/rules/:ruleId',
    views: {
      'tab-home': {
        templateUrl: 'templates/rules-detail.html',
        controller: 'RulesDetailCtrl'
      }
    }



  })
  .state('tab.verification', {
      url: '/verification',
      views: {
        'tab-verification': {
          templateUrl: 'templates/tab-verification.html',
          controller:'verificationCtrl'
        }
      }
    })
    .state('tab.verification-writeCode', {
      url: '/verification-writeCode',
      views: {
        'tab-verification': {
          templateUrl: 'templates/verification-writeCode.html',
          controller:'modalCtrl'
        }
      }
    })
    .state('tab.verification-scansCode', {
      url: '/verification-scansCode',
      views: {
        'tab-verification': {
          templateUrl: 'templates/verification-scansCode.html',
          controller:'scansCodeCtrl'
        }
      }
    })


  .state('tab.report', {
    url: '/report',
    views: {
      'tab-report': {
        templateUrl: 'templates/tab-report.html',
        controller:'reportCtrl'
      }
    }
  })

  .state('tab.my', {
    url: '/my',
    views: {
      'tab-my': {
        templateUrl: 'templates/tab-my.html',
        controller:'myCtrl'
      }
    }
  })
      .state('tab.my-messages', {
        url: '/my-messages',
        views: {
          'tab-my': {
            templateUrl: 'templates/my-messages.html'
          }
        }
      })
      .state('tab.myVerModal', {
        url: '/my-myVerModal',
        views: {
          'tab-my': {
            templateUrl: 'templates/my-modal/my-verification-modal.html'
          }
        }
      })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

})
