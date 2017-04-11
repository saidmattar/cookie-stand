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

var alkai = {
  location: 'Alkai',
  minCustHourly: '2',
  maxCustHourly:'16',
  avrgcoksehourly: '4.6',
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

var seattleCenter = {
  location: 'Seattle Center',
  minCustHourly: '11',
  maxCustHourly:'38',
  avrgcoksehourly: '2.7',
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
listHeading.textContent = seattleCenter.location;
body.appendChild(listHeading);
var hourlySales = document.createElement('ul');
body.appendChild(hourlySales);
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

var firstPike = {
  location: 'First and Pike',
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
var body =document.querySelector('body');
var listHeading = document.createElement('h2');
listHeading.textContent = firstPike.location;
body.appendChild(listHeading);
var hourlySales = document.createElement('ul');
body.appendChild(hourlySales);
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

var capitolHill = {
  location: ' Capital Hill',
  minCustHourly: '20',
  maxCustHourly:'38',
  avrgcoksehourly: '2.3',
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
listHeading.textContent = capitolHill.location;
body.appendChild(listHeading);
var hourlySales = document.createElement('ul');
body.appendChild(hourlySales);
capitolHill.hourlyAvrage();
var storeHours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
for(var i = 0; i < 15; i++){
  var hours = document.createElement('li');
  hourlySales.appendChild(hours);
  hours.textContent =  storeHours[i]
  + capitolHill.storeHourlyAve[i] + ' Cookies';
}
var total = document.createElement('li');
total.textContent = 'Total: ' + capitolHill.totalCookies + ' Cookies';
hourlySales.appendChild(total);
