(function () {
var mynewapp=angular.module('someApp',['myApp']);

mynewapp.config(function(){

  //your code to route from here! 

});
      mynewapp.controller("profileCtrl", function ($scope) {

            console.log("reached profile controller");
        });
    
})();