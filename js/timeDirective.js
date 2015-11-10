angular.module('timeApp').directive('showTime', function($interval){
  return {
    restrict: 'E',
    template: '<div>The current time is {{time | date: "short"}}</div>',
    link: function(s, e, a){
      var currentTime = new Date();
      s.time = currentTime.toISOString();
      $interval(function(){
        s.time = new Date().toISOString();
      }, 1000)
    }
  }
})
