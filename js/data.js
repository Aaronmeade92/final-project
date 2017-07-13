'use strict';

function resetLS() {
  //reset local storage
  localStorage.clear();
  //send the user to the menu
  location.href = './index.html';
}

var totalBeers = 0;
var totalWines = 0;
var totalLiquor = 0;

var allSelections = JSON.parse(localStorage.allButtonSelections);

var drinkBac = JSON.parse(localStorage.allDrinkBac);

var mealsConsumed = JSON.parse(localStorage.allMeals);

var drinksConsumed = JSON.parse(localStorage.allDrinks);
console.log(drinksConsumed);


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

// drinksConsumed.indexOf('pale');
// drinksConsumed.indexOf('stout');
// drinksConsumed.indexOf('ipa');
// drinksConsumed.indexOf('red');
// drinksConsumed.indexOf('white');
// drinksConsumed.indexOf('bubbles');
// drinksConsumed.indexOf('neat');
// drinksConsumed.indexOf('mixed');
// drinksConsumed.indexOf('shot');
for (var i = 0; i < drinksConsumed.length; i++) {

if (drinksConsumed.indexOf('pale') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('pale')] = 'Pale Beer';
}
 else if (drinksConsumed.indexOf('stout') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('stout')] = 'Stout Beer';

} else if (drinksConsumed.indexOf('ipa') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('ipa')] = 'IPA';

} else if (drinksConsumed.indexOf('red') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('red')] = 'Red Wine';

} else if (drinksConsumed.indexOf('white') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('white')] = 'White Wine';

} else if (drinksConsumed.indexOf('bubbles') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('bubbles')] = 'Champagne';

} else if (drinksConsumed.indexOf('neat') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('neat')] = 'Liquor neat';

} else if (drinksConsumed.indexOf('mixed') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('mixed')] = 'Mixed Drink';

} else if (drinksConsumed.indexOf('shot') !== -1) {
  drinksConsumed[drinksConsumed.indexOf('shot')] = 'Shot of Liquor';
  }
};

console.log(drinksConsumed);

drawTable();
function drawTable() {
  var dataTable = document.getElementById('drinkHistoryTable');
  console.log(dataTable);
  var tableHeader = document.createElement('thead');
  var headerRow = document.createElement('tr');
  var tableBody = document.createElement('tbody');
  var headers = ['What you drank','How much it affected you (BAC)','What your stomach-status was before the drink.'];
  for(var h = 0; h < headers.length;h++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = headers[h];
    headerRow.appendChild(headerCell);
  }
  tableHeader.appendChild(headerRow);
  dataTable.appendChild(tableHeader);
  for(var i = 0; i < drinksConsumed.length; i++) {
    var currentDrink = drinksConsumed[i];
    var currentDrinkBac = drinkBac[i];
    var currentMeal = mealsConsumed[i];
    var newRow = document.createElement('tr');
    var cellData = [currentDrink,currentDrinkBac.toFixed(4),currentMeal];
    for(var r = 0; r < cellData.length; r++) {
      var newCell = document.createElement('td');
      newCell.textContent = cellData[r];
      newRow.appendChild(newCell);
    }
    tableBody.appendChild(newRow);
  }
  dataTable.append(tableBody);
}

// Blur the screen as the user drinks more
if (drinksConsumed.length == 4) {
  $('#blurMe').foggy({
    blurRadius: 1,
    opacity: 0.9,
    cssFilterSupport: true
  });
}

if (drinksConsumed.length == 5) {
  $('#blurMe').foggy({
    blurRadius: 1.5,
    opacity: 0.8,
    cssFilterSupport: true
  });
}

if (drinksConsumed.length >= 6) {
  $('#blurMe').foggy({
    blurRadius: 3,
    opacity: 0.5,
    cssFilterSupport: true
  });
}
