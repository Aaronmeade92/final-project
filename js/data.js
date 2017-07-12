'use strict';
// localStorage.allButtonSelections = JSON.stringify(allSelections);

// localStorage.allDrinkBac = JSON.stringify(drinkBac);

// localStorage.allMeals = JSON.stringify(mealsConsumed);

var totalBeers = 0;
var totalWines = 0;
var totalLiquor = 0;

var allSelections = JSON.parse( localStorage.allButtonSelections);
console.log(allSelections);

var drinkBac = JSON.parse( localStorage.allDrinkBac);

var mealsConsumed = JSON.parse( localStorage.allMeals);

var drinksConsumed = JSON.parse( localStorage.allDrinks);

// functions for total BAC total drinks of each type and sub types


for (var i = 0; i < drinksConsumed.length; i++) {
  if(drinksConsumed[i] == 'pale' || drinksConsumed[i] == 'stout' || drinksConsumed[i] == 'ipa'){
    totalBeers++;
  }
  else if (drinksConsumed[i] == 'red' || drinksConsumed[i] == 'white' || drinksConsumed[i] == 'bubbles' ) {
    totalWines++;
  }
  else if (drinksConsumed[i] == 'neat' || drinksConsumed[i] == 'mixed' || drinksConsumed[i] == 'shot') {
    totalLiquor++;
  }

}

console.log(totalBeers + ' beer');
console.log(totalLiquor + ' liquor');
console.log(totalWines + ' wine');
