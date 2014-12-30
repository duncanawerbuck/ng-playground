(function() {

  app.factory('appStateSvc', ['colourSvc', appStateSvcFn]); 

  function appStateSvcFn(colourSvc) {
    
    var svc = {
      
      // state
      appState: {
        navigationInProgress: true,
        selectedColour: colourSvc.colours.selectedColour
      },
      
      // behaviour
      viewLoaded: function(viewName) {
        
        this.appState.navigationInProgress = false;
        console.info(viewName + ' was loaded');
      }
      
    };
    
    return svc;
  }
  
  
})();