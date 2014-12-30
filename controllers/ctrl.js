(function() {
  app.controller('AppStateCtrl', ['appStateSvc', appStateCtrlFn])
  app.controller('AboutCtrl', ['appStateSvc', 'colourSvc', aboutCtrlFn]);
  app.controller('MainCtrl', ['appStateSvc', 'colourSvc', mainCtrlFn]);
  app.controller('ColourSelectionCtrl', ['appStateSvc', 'colourSvc', colourSelectionCtrl]);

  function appStateCtrlFn(appStateSvc) {
    var vm = this;
    
    vm.appState = appStateSvc.appState;
    vm.isLoading = vm.appState.navigationInProgress;
  }
  
  function aboutCtrlFn(appStateSvc, colourSvc) {
    var vm = this;
    
    appStateSvc.viewLoaded('about');
  }
  
  function mainCtrlFn(appStateSvc, colourSvc) {
    var vm = this;
    
    appStateSvc.viewLoaded('main');
  }
  
  function colourSelectionCtrl(appStateSvc, colourSvc) {
    var vm = this;
    
    vm.colours =  colourSvc.colours;
    
    vm.appState = appStateSvc.appState;
    
    appStateSvc.viewLoaded('colourSelection');
  }
  

})();