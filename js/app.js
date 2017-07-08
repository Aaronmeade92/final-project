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

}

Button.prototype.storeChoice = function(){

}

Button.prototype.randomQuote = function(){

}

Button.prototype.creatBtn = function(){

}
