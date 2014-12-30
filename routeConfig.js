(function() {
  
  app.config(configFn);

  function configFn($routeProvider) {
    
    /*
    The resolve key ('foo' in this case) would normally be used so that
    we can make something available to the controller (e.g. results of
    a data load) when all is ready. However,we don't actually need this
    resolved value in this case. I'm simply using the 'resolve' feature
    to ensure that we're able to have full control over
    appStateSvc.appState.navigationInProgress.
    
    We're able to then refer to appStateSvc.appState at any time (from
    any controller/service) to determine if things like spinners
    should be visible.
    
    There's no doubt a better way to do this. John Papa handles this
    quite nicely in his Hot Towel Angular repo:
    http://www.johnpapa.net/hot-towel-angular/
    
    */
    
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl as mainVm',
      resolve: { foo: resolveFn }
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl as aboutVm',
      resolve: { foo: resolveFn }
    })
    .when('/colourSelection', {
      templateUrl: 'views/colourSelection.html',
      controller: 'ColourSelectionCtrl as colourSelectionVm',
      resolve: { foo: resolveFn }
    });
    
  }
  
  function resolveFn(appStateSvc, $q, $timeout) {

    // fake a small delay so we can prove that the footer is made invisible and
    // the 'Loading...' text is displayed while the new view is loading.
    appStateSvc.appState.navigationInProgress = true;

    var deferred = $q.defer();
    
    $timeout(function() {
      appStateSvc.appState.navigationInProgress = false;  
      deferred.resolve();
    }, 500);
    
    return deferred.promise;
  }
  
})();