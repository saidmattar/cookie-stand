'use strict';
var main = document.getElementById('main');
console.log('we got main', main);

function Store(name,minCustHourly,maxCustHourly,avrgcoksehourly){
  this.name = name;
  this.minCustHourly = minCustHourly;
  this.maxCustHourly = maxCustHourly;
  this.avrgcoksehourly = avrgcoksehourly;
  this.totalCookies = 0;
  this.storeHourlyAve = [];
}

Store.prototype.locationRandomCust = function(){
  return Math.floor(Math.random() * (this.maxCustHourly-this.minCustHourly+1) + this.minCustHourly);
};

Store.prototype.hourlyAvrage = function(){
  var cookiesHour;
  for( var i=0; i < 15; i++){
    cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
    this.storeHourlyAve.push(Math.round(cookiesHour));
    this.totalCookies +=  Math.round(cookiesHour);
  }
};

Store.prototype.getTable = function(){
  var table = document.createElement('table');
  table.textContent = seaTac.name;
  main.appendChild(table);
  var hourlySales = document.createElement('ul');
  main.appendChild(hourlySales);
  seaTac.hourlyAvrage();
  var storeHours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
  for(var i = 0; i < 15; i++){
    var hours = document.createElement('li');
    hourlySales.appendChild(hours);
    hours.textContent =  storeHours[i]
    + seaTac.storeHourlyAve[i] + ' Cookies';
  }
  var total = document.createElement('li');
  total.textContent = 'Total: ' + seaTac.totalCookies + ' Cookies';
  hourlySales.appendChild(total);
};
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
seaTac.getTable();

Store.prototype.locationRandomCust = function(){
  return Math.floor(Math.random() * (this.maxCustHourly-this.minCustHourly+1) + this.minCustHourly);
};

Store.prototype.hourlyAvrage = function(){
  var cookiesHour;
  for( var i=0; i < 15; i++){
    cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
    this.storeHourlyAve.push(Math.round(cookiesHour));
    this.totalCookies +=  Math.round(cookiesHour);
  }
};

Store.prototype.getTable = function(){
  var table = document.createElement('table');
  table.textContent = alkai.name;
  main.appendChild(table);
  var hourlySales = document.createElement('ul');
  main.appendChild(hourlySales);
  alkai.hourlyAvrage();
  var storeHours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
  for(var i = 0; i < 15; i++){
    var hours = document.createElement('li');
    hourlySales.appendChild(hours);
    hours.textContent =  storeHours[i]
    + alkai.storeHourlyAve[i] + ' Cookies';
  }
  var total = document.createElement('li');
  total.textContent = 'Total: ' + alkai.totalCookies + ' Cookies';
  hourlySales.appendChild(total);
};
var alkai = new Store('Alkai', 2, 16, 4.6);
alkai.getTable();

Store.prototype.getTable = function(){
  var table = document.createElement('table');
  table.textContent = seattleCenter.name;
  main.appendChild(table);
  var hourlySales = document.createElement('ul');
  main.appendChild(hourlySales);
  seattleCenter.hourlyAvrage();
  var storeHours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
  for(var i = 0; i < 15; i++){
    var hours = document.createElement('li');
    hourlySales.appendChild(hours);
    hours.textContent =  storeHours[i]
    + seattleCenter.storeHourlyAve[i] + ' Cookies';
  }
  var total = document.createElement('li');
  total.textContent = 'Total: ' + seattleCenter.totalCookies + ' Cookies';
  hourlySales.appendChild(total);
};
var seattleCenter = new Store('Seattle Center', 11, 38, 2.7);
seattleCenter.getTable();

Store.prototype.getTable = function(){
  var table = document.createElement('table');
  table.textContent = firstPike.name;
  main.appendChild(table);
  var hourlySales = document.createElement('ul');
  main.appendChild(hourlySales);
  firstPike.hourlyAvrage();
  var storeHours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
  for(var i = 0; i < 15; i++){
    var hours = document.createElement('li');
    hourlySales.appendChild(hours);
    hours.textContent =  storeHours[i]
    + firstPike.storeHourlyAve[i] + ' Cookies';
  }
  var total = document.createElement('li');
  total.textContent = 'Total: ' + firstPike.totalCookies + ' Cookies';
  hourlySales.appendChild(total);
};
var firstPike = new Store('First and Pike', 23, 65, 6.3);
firstPike.getTable();
