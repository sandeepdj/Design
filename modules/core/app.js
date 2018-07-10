(function () {
    
    angular.module('myApp', ['ngAnimate','ngSanitize','ui.router','oc.lazyLoad'])
    
   .config([ "$ocLazyLoadProvider", function($ocLazyLoadProvider) {
       $ocLazyLoadProvider.config({
            'debug': true, // For debugging 'true/false'
		    'events': true, // For Event 'true/false'
		    'modules': [{ // Set modules initially
		        name : 'loginModule', // State1 module
		        files: ['modules/users/login/login-controller.js']
		    },{
		        name : 'profileModule', // State2 module
		        files: ['modules/users/profile/profile-controller.js']
		    }]

       });
   }])
    .config(function ($stateProvider, $locationProvider, $ocLazyLoadProvider,$urlRouterProvider) {
     $urlRouterProvider.otherwise("login");

            $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: "modules/users/login/login.html",
                     resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            // you can lazy load files for an existing module
                            return $ocLazyLoad.load('loginModule'); //// Resolve promise and load before view 
                        }]
                    }
                })
            .state("profile", {
                url:"/profile",
                templateUrl: "modules/users/profile/profile-view.html",
                  resolve: {
                      loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                      return $ocLazyLoad.load('profileModule');
                        }]
                    }
            })
             // Without server side support html5 must be disabled.
    $locationProvider.html5Mode(false);
        
    });
        

}());