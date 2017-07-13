'use strict';
  // set up  global variables here

  //This will hold the BAC of each drink in order
if (localStorage.allDrinkBac) {
  var drinkBac = JSON.parse(localStorage.allDrinkBac);
} else {
  var drinkBac = [];
}
  //This will hold the specific type of each drink in the order consumed
if (localStorage.allDrinks) {
  var drinksConsumed = JSON.parse(localStorage.allDrinks);
} else {
  var drinksConsumed = [];
}
  //This will hold the types of meals in the order consumed
if (localStorage.allMeals) {
  var mealsConsumed = JSON.parse(localStorage.allMeals);
} else {
  var mealsConsumed = [];
}
  // we'll need one to store the current step in the app
var preGameStep = 0;

  // an array to store beer quotes (test <br>)
var beerQuotes = [
  '\"Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes health.\"<br>-Thomas Jefferson',
  '\"In a study, scientists report that drinking beer can be good for the liver. I’m sorry, did I say ‘scientists’? I meant Irish people.\"<br>-Tina Fey',
  '\"A man who lies about beer makes enemies.\"<br>-Stephen King',
  '\"He was a wise man who invented beer.\"<br>-Plato',
  '\"Always do sober what you said you\'d do drunk. That will teach you to keep your mouth shut.\"<br>-Ernest Hemingway',
  '\"You\'re not drunk if you can lie on the floor without holding on.\"<br>-Dean Martin',
  '\"Homer no function beer well without.\"<br>-Homer Simpsons',
  '\"Hold my beer!\"<br>-Bad Decisions',
  '\"24 hours in a day, 24 beers in a case. Coincidence?\"<br>-Stephen Wright',
  '\"Most people hate the taste of beer—to begin with. It is, however, a prejudice.\"<br>-Winston Churchill'
];

  // one to store wine quotes
var wineQuotes = [
  '\"What wine goes with Captain Crunch?\"<br>-George Carlin',
  '\"Cheers to pour decisions!\"<br>-Wine',
  '\"My only regret in life is that I didn’t drink enough Champagne.\"<br>-Robert Noecker',
  '\"Drink wine: it isn\'t good to keep things bottled up.\"<br>-Anonymous',
  '\"I shall drink no wine before it’s time! OK, it’s time.\"<br>-Groucho Marx',
  '\"I cook with wine; sometimes I even add it to the food.\"<br>-W.C. Fields',
  '\"Wine is sunlight, held together by water.\"<br>-Galileo',
  '\"Most of the confidence which I appear to feel, especially when influenced by noon wine, is only a pretense.\"<br>-Tennessee Williams',
  '\"Wine makes daily living easier, less hurried, with fewer tensions and more tolerance.\"<br>-Benjamin Franklin',
  '\"Today is a good day to drink.\"<br>-Worff, son of Mogh'
];

  // liquor quotes
var liquorQuotes = [
  '\"There are only two real ways to get ahead today - sell liquor or drink it.\"<br>-W. C. Fields',
  '\"Drink because you are happy, but never because you are miserable.\"<br>-G.K. Chesterton',
  '\"Keeping one’s guests supplied with liquor is the first law of hospitality.\"<br>-Margaret Way',
  '\"Alcohol may be a man’s worst enemy, but the bible says love your enemy.\"<br>-Frank Sinatra',
  '\"I have taken more out of alcohol than alcohol has taken out of me.\"<br>-Winston Churchill',
  '\"Alcohol gives you infinite patience for stupidity.\"<br>-Sammy Davis, Jr.',
  '\"To me, drink responsibly means don\'t spill it.\"<br>-Bill Murray',
  '\"Trust me, you can dance.\"<br>-Vodka',
  '\"Too much of anything is bad but too much of good whiskey is barely enough.\"<br>-Mark Twain',
  '\"Pouring out liquor is like burning books.\"<br>-William Faulkner'
];

  // we need an array to store all of the selections that are made in a session
if (localStorage.allButtonSelections) {
  var allSelections = JSON.parse(localStorage.allButtonSelections);
} else {
  var allSelections = [];
}

  // we need an array to store current sessions
var currentSelections = [];

  // buttonTargetLocation stores the class name that we'll drop buttons into
var buttonTargetLocation = 'choice-container';
// getButtonParent will store the DOM object associated with the buttonTargetLocation class name
var getButtonParent = document.getElementsByClassName(buttonTargetLocation)[0];

// Let's make some buttons!
function Button(abv, ounces, name, type, icon, link) {
  this.name = name;
  this.type = type;
  this.icon = icon;
  this.fa = 'fa';
  this.iconClass = 'icon';
  this.selected = 0;
  this.parent = '';
  this.link = link;
  this.abv = abv;
  this.ounces = ounces;
  this.drinkabv = (this.abv / 100) * this.ounces;
  this.drinkbac = (this.drinkabv * 5.14) / (150 * .69);
}

// This'll get rid of the current set of buttons after one is clicked,
// then, it'll increment the current step of the pre-game app
Button.prototype.clearParent = function() {
  console.log(currentSelections);
  if (this.type != 'home' || this.type != 'another') {
    currentSelections.push(this);
  }
  if (preGameStep < 3) {
    while(getButtonParent.firstChild){
      getButtonParent.scrollTop = 0;
      getButtonParent.removeChild(getButtonParent.firstChild);
    }
    preGameStep++;
    if (preGameStep === 1) {
      stepTwo();
    } else if (preGameStep === 2) {
      stepThree();
    } else {
      stepFour();
    }
  } else {
    nextAction();
  }
};
// This'll keep track of whether each button that's displayed was clicked or not.
Button.prototype.storeChoice = function() {
  this.selected++;
  console.log(this.type + ' ' + 'has been selected ' + this.selected + ' time(s).');
};
// This'll grab a random quote for each button type where one should exist
Button.prototype.randomQuote = function() {
  if (this.type == 'beer' || this.type == 'pale' || this.type == 'stout' || this.type == 'ipa') {
    return beerQuotes[Math.floor(Math.random() * beerQuotes.length)];
  } else if (this.type == 'wine' || this.type == 'red' || this.type == 'white' || this.type == 'bubbles') {
    return wineQuotes[Math.floor(Math.random() * wineQuotes.length)];
  } else if (this.type == 'liquor' || this.type == 'neat' || this.type == 'mixed' || this.type == 'shot') {
    return liquorQuotes[Math.floor(Math.random() * liquorQuotes.length)];
  } else if (this.type == 'light'){
    return 'Drinking on an empty stomach?!? Maybe we should eat something...';
  } else if (this.type == 'medium'){
    return 'Nice, maintaining a middle ground between how much you are eating and drinking tonight!';
  } else if (this.type == 'heavy'){
    return 'Full eh? Well whatcha waiting for! Go order a drink...or go home.';
  } else if (this.type == 'another') {
    if (allSelections.length > 5) {
      return 'Is it really a good idea to have another?';
    } else {
      return 'Go on, one more won\'t hurt!';
    }
  } else if (this.type == 'home') {
    return 'There\'s no place like home, there\'s no place like home!';
  } else if (this.type == 'drinkdata') {
    return 'Look what you\'ve done!';
  }else if (this.type == 'rides') {
    return 'Please don\'t drink and drive!';
  }
};
//
Button.prototype.goHome = function() {
  window.location = 'index.html';
};
Button.prototype.drinkData = function() {
  window.location = 'drunk-o-meter.html';
};
Button.prototype.ridesLink = function() {
  window.location = 'rides.html';
};
// This'll draw the button to the page! Magical!
Button.prototype.createBtn = function(parent) {
  // set the parent of the button inside the button
  this.parent = parent;
  // build out the structure of the button (button tags containing several divs)
  var button = document.createElement('button');
  button.classList.add('animated');
  button.classList.add('slideInLeft');
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
  if (this.type == 'home') {
    button.addEventListener('click', this.goHome.bind(this));
  }
  if (this.type == 'drinkdata') {
    button.addEventListener('click', this.drinkData.bind(this));
  }
  if (this.type == 'rides') {
    button.addEventListener('click', this.ridesLink.bind(this));
  }
  choiceTop.appendChild(iconDiv);
  choiceTop.appendChild(iconDesc);
  choice.appendChild(choiceTop);
  choice.appendChild(choiceBottom);
  button.appendChild(choice);
  parent.appendChild(button);
};

stepOne();

// This is the first screen
function stepOne() {
  // instantiate & append to body
  var light = new Button(1, 0, 'Empty','light','fa-battery-empty');
  var medium = new Button(.99, 0, 'Half Full','medium','fa-battery-half');
  var heavy = new Button(.98, 0, 'Stuffed','heavy','fa-battery-full');
  setTimeout(function(){ light.createBtn(getButtonParent); }, 100);
  setTimeout(function(){ medium.createBtn(getButtonParent); }, 150);
  setTimeout(function(){ heavy.createBtn(getButtonParent); }, 200);
}
// This is the second screen
function stepTwo() {
  // instantiate & append to body
  var beer = new Button(0, 0, 'Beer','beer','fa-beer');
  var wine = new Button(0, 0, 'Wine','wine','fa-glass');
  var liquor = new Button(0, 0, 'Liquor','liquor','fa-flask');
  setTimeout(function(){ beer.createBtn(getButtonParent); }, 100);
  setTimeout(function(){ wine.createBtn(getButtonParent); }, 150);
  setTimeout(function(){ liquor.createBtn(getButtonParent); }, 200);
}

function stepThree() {
  if (currentSelections[1].type == 'beer') {
    var light = new Button(4.04, 14, 'Light','pale','fa-beer');
    var stout = new Button(6.02, 14, 'Stout','stout','fa-beer');
    var ipa = new Button(7.5, 14, 'IPA','ipa','fa-beer');
    setTimeout(function(){ light.createBtn(getButtonParent); }, 100);
    setTimeout(function(){ stout.createBtn(getButtonParent); }, 150);
    setTimeout(function(){ ipa.createBtn(getButtonParent); }, 200);
  } else if (currentSelections[1].type == 'wine') {
    var red = new Button(12, 6, 'Red Wine','red','fa-glass');
    var white = new Button(12, 6, 'White Wine','white','fa-glass');
    var bubbles = new Button(12, 6, 'Champaigne','bubbles','fa-glass');
    setTimeout(function(){ red.createBtn(getButtonParent); }, 100);
    setTimeout(function(){ white.createBtn(getButtonParent); }, 150);
    setTimeout(function(){ bubbles.createBtn(getButtonParent); }, 200);
  } else if (currentSelections[1].type == 'liquor') {
    var neat = new Button(40, 1.5, 'Liquor Neat or Rocks','neat','fa-flask');
    var mixed = new Button(40, 1.5, 'Mixed Cocktail','mixed','fa-flask');
    var shot = new Button(40, 1.5, 'A Shot','shot','fa-flask');
    setTimeout(function(){ neat.createBtn(getButtonParent); }, 100);
    setTimeout(function(){ mixed.createBtn(getButtonParent); }, 150);
    setTimeout(function(){ shot.createBtn(getButtonParent); }, 200);
  }
}

function stepFour() {
  // Assign the elements in the currentSelections array that we're interested in into variables
  var currentFood = currentSelections[0];
  var currentBooze = currentSelections[2];

  //calculate the bac contribution of the current drink and push it into the drinkBac array
  var newbac = currentBooze.drinkbac * currentFood.abv;
  drinkBac.push(newbac);
  //console.log('The abv for this drink is: ' + newbac.toFixed(4));
  // push the current meal type to the meals consumed array
  mealsConsumed.push(currentFood.type);
  // console.log('The current meal type is: ' + currentFood.type);
  // push the current drink type to the drinks consumed array
  drinksConsumed.push(currentBooze.type);
  // console.log('The current drink type is: ' + currentBooze.type);
  // add all three of the current buttons to the allSelections array
  allSelections = allSelections.concat(currentSelections);
  // console.log(allSelections);

  localStorage.allButtonSelections = JSON.stringify(allSelections);
  console.log(localStorage.allButtonSelections);
  localStorage.allDrinkBac = JSON.stringify(drinkBac);
  console.log(localStorage.allDrinkBac);
  localStorage.allMeals = JSON.stringify(mealsConsumed);
  console.log(localStorage.allMeals);
  localStorage.allDrinks = JSON.stringify(drinksConsumed);
  console.log(localStorage.allDrinks);

  // This will draw the 'add another' and 'home' buttons on the screen.
  var another = new Button(0, 0, 'Add another?','another','fa-plus');
  var drinkdata = new Button(0, 0, 'Your Drink Data', 'drinkdata', 'fa-history', 'drunk-o-meter.html');
  var home = new Button(0, 0, 'To the Menu','home','fa-home','index.html');
  var rides = new Button(0, 0, 'Get Home Safe', 'rides', 'fa-taxi', 'rides.html');
  setTimeout(function(){ another.createBtn(getButtonParent); }, 100);
  setTimeout(function(){ drinkdata.createBtn(getButtonParent); }, 150);
  setTimeout(function(){ home.createBtn(getButtonParent); }, 200);
  setTimeout(function(){ rides.createBtn(getButtonParent); }, 250);
}

function nextAction() {
  //reset the current step in the preGame to 0
  preGameStep = 0;
  // check if the selection made is to enter another drink. If so, remove all the buttons from the screen and
  if (currentSelections[3].type == 'another') {
    // clear the buttons from the screen
    while(getButtonParent.firstChild){
      getButtonParent.removeChild(getButtonParent.firstChild);
    }
    currentSelections = [];
    // start over!
    stepOne();
  }
}
