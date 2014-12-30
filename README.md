###AngularJS 1.3 basic template
* Routing
* Multiple controllers share a service
* Simple Dropdown (separating application state from list of available options)
* ng-style to conditionally apply colours based on dropdown selection

In particular, notice that there is a single service for application 'state', where we can determine which colour is currently selected.

For the dropdown to work properly with ng-model and ng-options, the state service (appStateSvc.js) is just exposing the colourSvc's selectedColour

Importantly, the list of AVAILABLE colours isn't part of the application's state (the list of colours, as well as the currently-selected colour are both ultimately stored in colourSvc).

The benefit is that you can always determine the application state by examining appStateSvc (even though it's simply deferring some stuff like currently-selected-colour to colourSvc).