(function() {

  app.factory('colourSvc', function() {

    var svc = {
      colours: {
        selectedColour: 'blue',
        availableColours: ['red', 'blue', 'green']
      }
      
    };

    return svc;
  });
})();