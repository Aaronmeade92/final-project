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

if (drinksConsumed.length == 6 ) {
  $('#blurMe').foggy({
    blurRadius: 1.5,
    opacity: 0.8,
    cssFilterSupport: true
  });
}

if (drinksConsumed.length >= 8) {
  $('#blurMe').foggy({
    blurRadius: 3,
    opacity: 0.5,
    cssFilterSupport: true
  });
  var overlayEl = document.getElementById('overlay');
  overlayEl.classList.add('animated');
  overlayEl.classList.add('jackInTheBox');
  var box = document.createElement('div');
  box.id = 'overlayBox';
  var headerEl = document.createElement('h1');
  headerEl.textContent = 'It seems you\'ve had one too many...';
  var paraEl = document.createElement('p');
  paraEl.textContent = 'No, really. Click the button below to get a ride home.';
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('type', 'click');
  buttonEl.setAttribute('name','Yes');
  buttonEl.setAttribute('value','Yes');
  buttonEl.setAttribute('onclick','rideTime()');
  buttonEl.innerHTML = '<span>You\'re right. Take me home!</span>';
  box.appendChild(headerEl);
  box.appendChild(paraEl);
  box.appendChild(buttonEl);
  overlayEl.appendChild(box);
  var theBodyEl = document.getElementById('theBody');
  theBodyEl.addEventListener('click', handleSubmit);
  function handleSubmit(event){
    overlayEl.classList.remove('jackInTheBox');
    overlayEl.classList.add('hinge');
    setTimeout(function(){ overlayEl.style.display = 'none'; }, 2000);
    $('#blurMe').foggy({
      blurRadius: 0,
      opacity: 9,
      cssFilterSupport: true
    });
  }
}

function rideTime() {
  //reset local storage
  localStorage.clear();
  //send the user to the menu
  location.href = './rides.html';
}

drawPie();
function drawPie() {
  var canvas = document.getElementById("pieChartDiv");
  var ctx = canvas.getContext('2d');

  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontSize = 16;

  var data = {
    labels: ["Beer", "Wine", "Liquor"],
    datasets: [
      {
        fill: true,
        backgroundColor: ['#16a085', '#27ae60', '#8e44ad'],
        data: [totalBeers, totalWines, totalLiquor],
        borderColor:	['black', 'black', 'black'],
        borderWidth: [0,0,0]
      }
        ]
      };
  var options = {
    title: {
      display: true,
      text: 'Drink Results',
      position: 'top'
    },
    rotation: -0.7 * Math.PI
  };
  var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
  });
};
