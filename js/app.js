'use strict';

// set up  global variables here
  // we'll need one to store the current step in the app
  // an array to store beer quotes
  // one to store wine quotes
  // liquor quotes
  // we need an array to store all of the selections that are made in a session
  // we need an array to store current sessions

  // buttonTargetLocation stores the class name that we'll drop buttons into
var buttonTargetLocation = 'choice-container';
// getButtonParent will store the DOM object associated with the buttonTargetLocation class name
var getButtonParent = document.getElementsByClassName(buttonTargetLocation)[0];

// Let's build a constructor for our buttons here. It'll need to take in name, type, and icon parameters
