'use strict';

  // set up  global variables here

  // we'll need one to store the current step in the app
var preGameStep = 0;

  // an array to store beer quotes

var beerQuotes = [

];
  // one to store wine quotes

var wineQuotes = [

];
  // liquor quotes

var liquorQuotes = [

];

  // we need an array to store all of the selections that are made in a session
var allSelections = [];

  // we need an array to store current sessions
var currrentSelections = [];

  // buttonTargetLocation stores the class name that we'll drop buttons into
var buttonTargetLocation = 'choice-container';
// getButtonParent will store the DOM object associated with the buttonTargetLocation class name
var getButtonParent = document.getElementsByClassName(buttonTargetLocation)[0];

// Let's build a constructor for our buttons here. It'll need to take in name, type, and icon parameters
function Button(name, type, icon){
  this.name = name;
  this.type = type;
  this.icon = icon;
  this.fa = 'fa';
  this.iconClass = 'icon';
  this.selected = 0;
  this.parent = '';
}

Button.prototype.clearParent = function(){
  currrentSelections.push
}

Button.prototype.storeChoice = function(){
  this.selected++;
  console.log(this.type + '' + 'has been selected' + this.selected + 'time(s).');
}

Button.prototype.randomQuote = function(){
  if (this.type == 'beer' || this.type == 'pale' || this.type == 'stout' || this.type == 'IPA') {
    return beerQuotes[Math.floor(Math.random() * beerQuotes.length)];
  } else if (this.type == 'wine' || this.type == 'red' || this.type == 'white' || this.type == 'bubbles') {
    return wineQuotes[Math.floor(Math.random() * wineQuotes.length)];
  } else if (this.type == 'liqour' || this.type == 'single' || this.type == 'double') {
    return liqourQuotes[Math.floor(Math.random() * liqourQuotes.length)];
  }else if (this.type == 'light' || this.type == 'medium' || this.type == 'heavy') {
    return 'temp quote about things'
  }else if (this.type == 'another') {
    if(allSelections.length > 5){
      return 'Is it really a good idea to have another?';
    }else {
      return 'Go on one more won\'t hurt!';
    }else if (this.type == 'home') {
      return 'There\s no place like home, there\s no place like home!'
    }
  }
}

Button.prototype.creatBtn = function(parent){
  this.parent = parent;
  var button = document.createElement('button');
  var choice = document.createElement('div');
  choice.classList.add('choice');
  var choiceTop = document.createElement('div');
  choiceTop.classList.add('choice-top');
  var iconDiv = document.createElement('div');
  iconDiv.classList.add(this.iconClass);
  iconDiv.classList.add(this.type);
  iconDiv.classList.add(this.fa);
  iconDiv.classList.add(this.icon);
  iconDiv.classList.add('choice-descriptionIcon');
  var iconDesc = document.createElement('div');
  iconDesc.classList.add('choice-descriptionText');
  iconDesc.innerHTML = this.name;
  var choiceBottom = document.createElement('div');
  choiceBottom.classList.add('choice-bottom');
  choiceBottom.innerHTML = this.randomQuote();
  button.type = 'button';
  button.addEventListener('click', this.storeChoice.bind(this));
  button.addEventListener('click', this.clearParent.bind(this));
  choiceTop.appendChild(iconDiv);
  choiceTop.appendChild(iconDesc);
  choice.appendChild(choiceTop);
  choice.appendChild(choiceBottom);
  button.appendChild(choice);
  parent.appendChild(button);
}
