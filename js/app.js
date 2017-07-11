'use strict';
  // set up  global variables here

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
var allSelections = [];

  // we need an array to store current sessions
var currentSelections = [];

  // buttonTargetLocation stores the class name that we'll drop buttons into
var buttonTargetLocation = 'choice-container';
// getButtonParent will store the DOM object associated with the buttonTargetLocation class name
var getButtonParent = document.getElementsByClassName(buttonTargetLocation)[0];

// Let's make some buttons!
function Button(name, type, icon, link) {
  this.name = name;
  this.type = type;
  this.icon = icon;
  this.fa = 'fa';
  this.iconClass = 'icon';
  this.selected = 0;
  this.parent = '';
  this.link = link;
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
  } else if (this.type == 'liquor' || this.type == 'single' || this.type == 'double') {
    return liquorQuotes[Math.floor(Math.random() * liquorQuotes.length)];
  } else if (this.type == 'light' || this.type == 'medium' || this.type == 'heavy'){
    return 'temporary quote about eating when drinking';
  } else if (this.type == 'another') {
    if (allSelections.length > 5) {
      return 'Is it really a good idea to have another?';
    } else {
      return 'Go on, one more won\'t hurt!';
    }
  } else if (this.type == 'home') {
    return 'There\'s no place like home, there\'s no place like home!';
  }
};
//
Button.prototype.goHome = function() {
  window.location = 'index.html';
};
// This'll draw the button to the page! Magical!
Button.prototype.createBtn = function(parent) {
  // set the parent of the button inside the button
  this.parent = parent;
  // build out the structure of the button (button tags containing several divs)
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
  if (this.link) {
    button.addEventListener('click', this.goHome.bind(this));
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
  var light = new Button('Half Empty','light','fa-battery-empty');
  var medium = new Button('Half Full','medium','fa-battery-half');
  var heavy = new Button('Stuffed','heavy','fa-battery-full');
  light.createBtn(getButtonParent);
  medium.createBtn(getButtonParent);
  heavy.createBtn(getButtonParent);
}
// This is the second screen
function stepTwo() {
  // instantiate & append to body
  var beer = new Button('Beer','beer','fa-beer');
  var wine = new Button('Wine','wine','fa-glass');
  var liquor = new Button('Liquor','liquor','fa-flask');
  beer.createBtn(getButtonParent);
  wine.createBtn(getButtonParent);
  liquor.createBtn(getButtonParent);
}

function stepThree() {
  if (currentSelections[1].type == 'beer') {
    var pale = new Button('Pale','pale','fa-beer');
    var stout = new Button('Stout','stout','fa-beer');
    var ipa = new Button('IPA','ipa','fa-beer');
    pale.createBtn(getButtonParent);
    stout.createBtn(getButtonParent);
    ipa.createBtn(getButtonParent);
  } else if (currentSelections[1].type == 'wine') {
    var red = new Button('Red Wine','red','fa-glass');
    var white = new Button('White Wine','white','fa-glass');
    var bubbles = new Button('Champaigne','bubbles','fa-glass');
    red.createBtn(getButtonParent);
    white.createBtn(getButtonParent);
    bubbles.createBtn(getButtonParent);
  } else if (currentSelections[1].type == 'liquor') {
    var neat = new Button('Liquor Neat or Rocks','neat','fa-flask');
    var mixed = new Button('Mixed Cocktail','mixed','fa-flask');
    var shot = new Button('A Shot','shot','fa-flask');
    neat.createBtn(getButtonParent);
    mixed.createBtn(getButtonParent);
    shot.createBtn(getButtonParent);
  }

}

function stepFour() {
  allSelections = allSelections.concat(currentSelections);
  console.log(allSelections);
  var another = new Button('Add another?','another','fa-plus');
  var home = new Button('To the Menu','home','fa-home','index.html');
  another.createBtn(getButtonParent);
  home.createBtn(getButtonParent);
}

function nextAction() {
  preGameStep = 0;
  if (currentSelections[3].type == 'home') {
    console.log('send the user to the app start screen');
    currentSelections = [];
  } else if (currentSelections[3].type == 'another') {
    console.log('start from the top!');
    currentSelections = [];
    while(getButtonParent.firstChild){
      getButtonParent.removeChild(getButtonParent.firstChild);
    }
    stepOne();
  }
}
