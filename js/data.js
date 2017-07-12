'use strict';

// localStorage.allButtonSelections = JSON.stringify(allSelections);

// localStorage.allDrinkBac = JSON.stringify(drinkBac);

// localStorage.allMeals = JSON.stringify(mealsConsumed);

// localStorage.allDrinks = JSON.stringify(drinksConsumed);

var allSelections = JSON.parse( localStorage.allButtonSelections);
console.log(allSelections);

var drinkBac = JSON.parse( localStorage.allDrinkBac);

var mealsConsumed = JSON.parse( localStorage.allMeals);

var drinksConsumed = JSON.parse( localStorage.allDrinks);







drawTable();
// Jed working below this line
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
