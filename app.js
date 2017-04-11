'use strict'
var seaTac = {
  location: 'SeaTac Airport',
  minCustHourly: '3',
  maxCustHourly:'24',
  avrgcoksehourly: '1.2',
  storeHourlyAve: [],
  totalCookies: 0,
  locationRandomCust: function(){
    Math.random();
    return Math.floor(Math.random() * (this.maxCustHourly-this.minCustHourly+1) + this.minCustHourly);
  },
  hourlyAvrage: function(){
    var cookiesHour;
    for( var i=0; i < 15; i++){
      cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
      this.storeHourlyAve.push(Math.round(cookiesHour));
      this.totalCookies +=  Math.round(cookiesHour);
    }
  }
};
var alkai = {
  location: 'Alkai',
  minCustHourly: '2',
  maxCustHourlythourly:'16',
  avrgCokseHourly: '4.6',
  totalCookies: 0,
  locationRandomCust: function(){
    Math.random();
    return Math.floor(Math.random() * (this.maxCustHourly-this.minCustHourly+1) + this.minCustHourly);
  },
  hourlyAvrage: function(){
    var cookiesHour;
    for( var i=0; i < 15; i++){
      cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
      this.storeHourlyAve.push(Math.round(cookiesHour));
      this.totalCookies +=  Math.round(cookiesHour);
    }
  }
};
var firstPike = {
  location: '1st and Pike',
  minCustHourly: '23',
  maxCustHourly:'65',
  avrgcoksehourly: '6.3',
  storeHourlyAve: [],
  totalCookies: 0,
  locationRandomCust: function(){
    Math.random();
    return Math.floor(Math.random() * (this.maxCustHourly-this.minCustHourly+1) + this.minCustHourly);
  },
  hourlyAvrage: function(){
    var cookiesHour;
    for( var i=0; i < 15; i++){
      cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
      this.storeHourlyAve.push(Math.round(cookiesHour));
      this.totalCookies +=  Math.round(cookiesHour);
    }
  }
};
var seattleCenter = {
  location: 'Seattle Center',
  minCustHourly: '11',
  maxcusthourly:'38',
  avrgCokseHourly: '3.7',
  storeHourlyAve: [],
  totalCookies: 0,
  locationRandomCust: function(){
    Math.random();
    return Math.floor(Math.random() * (this.maxCustHourly-this.minCustHourly+1) + this.minCustHourly);
  },
  hourlyAvrage: function(){
    var cookiesHour;
    for( var i=0; i < 15; i++){
      cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
      this.storeHourlyAve.push(Math.round(cookiesHour));
      this.totalCookies +=  Math.round(cookiesHour);
    }
  }
};
var capitoHill = {
  location: 'Capitol Hill',
  minCustHourly: '20',
  maxCustHourly:'38',
  avrgCokseHourly: '2.3',
  storeHourlyAve: [],
  totalCookies: 0,
  locationRandomCust: function(){
    Math.random();
    return Math.floor(Math.random() * (this.maxCustHourly-this.minCustHourly+1) + this.minCustHourly);
  },
  hourlyAvrage: function(){
    var cookiesHour;
    for( var i=0; i < 15; i++){
      cookiesHour = this.avrgcoksehourly * this.locationRandomCust();
      this.storeHourlyAve.push(Math.round(cookiesHour));
      this.totalCookies +=  Math.round(cookiesHour);
    }
  }
};
var body =document.querySelector('body');
var listHeading = document.createElement('h2');
listHeading.textContent = seaTac.location;
body.appendChild(listHeading);
var hourlySales = document.createElement('ul');
body.appendChild(hourlySales);
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


var listHeading = document.createElement('h2');
listHeading.textContent = alkai.location;
body.appendChild(listHeading);
var hourlySales = document.createElement('ul');
body.appendChild(hourlySales);
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
