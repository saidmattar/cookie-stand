'use strict';

// function StoresList(storeName,totalCookies) {
//   this.storeName = storeName;
//   this.storeHourlyAve = [];
//   this.totalCookies = totalCookies;
// }

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

var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);

var alki = new Store('Alkai', 2, 16, 4.6);

var seattleCenter = new Store('Seattle Center', 11, 38, 2.7);

var firstPike = new Store('First and Pike', 23, 65, 6.3);
