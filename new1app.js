'use strict';
var main = document.getElementById('main');
var storeHours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
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
  for( var i=0; i < this.storeHours.length; i++){
    cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
    this.storeHourlyAve.push(Math.round(cookiesHour));
    this.totalCookies +=  Math.round(cookiesHour);
  }
};

Store.prototype.makeTable = function(){
  var main = document.getElementById('main');
  var table = document.createElement('table');
  table.id = 'table';
  main.appendChild(table);
};

Store.prototype.getTable = function(){
  var table = document.getElementById('table');
  var hourlySales = document.createElement('tr');
  var names = document.createElement('td');
  names.textContent = this.name;
  hourlySales.appendChild(names);
  this.hourlyAvrage();

  for(var i = 0; i < 15; i++){
    var hours = document.createElement('td');
    hourlySales.appendChild(hours);
    hours.textContent = this.storeHourlyAve[i] + ' Cookies';
  }
  var total = document.createElement('td');
  total.textContent =  this.totalCookies + ' Cookies';
  hourlySales.appendChild(total);
  table.appendChild(hourlySales);
};

function  makeHeader()  {
  var table = document.getElementById('table');
  var header = document.createElement('tr');
  var sOpenHours = document.createElement('th');
  header.appendChild(sOpenHours);
  table.appendChild(header);
  for( var i = 0; i < storeHours.length; i++){
    sOpenHours = document.createElement('th');
    sOpenHours.textContent = storeHours[i];
    header.appendChild(sOpenHours);
  }
  sOpenHours = document.createElement('th');
  header.appendChild(sOpenHours);
  sOpenHours.textContent = 'Total';
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

var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var alkai = new Store('Alkai', 2, 16, 4.6);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.7);
var firstPike = new Store('First and Pike', 23, 65, 6.3);

function handleStoreAddingSubmit(event){
  event.preventDefault();
  var form = event.target;
  var name = form.name.value;
  console.log(name);
  var minCustHourly = form.minCustHourly.value;
  console.log(minCustHourly);
  var maxCustHourly = form.maxCustHourly.value;
  var avrgcoksehourly = form.avrgcoksehourly.value;
  form.name.value = '';
  form.minCustHourly.value = '';
  form.maxCustHourly.value = '';
  form.avrgcoksehourly.value = '';
  var newStoreName = new Store(name, minCustHourly, maxCustHourly, avrgcoksehourly);
  console.log( newStoreName);
  newStoreName.getTable();
}

var storeAddingForm =  document.getElementById('store-creat');
storeAddingForm.addEventListener('submit',handleStoreAddingSubmit );
capitolHill.makeTable();
makeHeader();
capitolHill.getTable();
seattleCenter.getTable();
firstPike.getTable();
alkai.getTable();
seaTac.getTable();
