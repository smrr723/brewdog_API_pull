var makeRequest = function(url, callback){
// create a new XHR - XML, HTTP Request
   var request = new XMLHttpRequest();
   // open the request, passing the HTTP type and URL in
   request.open('GET', url);
   // write an event listener for the request
   request.addEventListener('load', callback);
   // GO!
   request.send();
}

var populateBeer = function(beers){
   for(beer of beers){
      var beerItem = document.createElement('div');
      beerItem.setAttribute('class', 'beer-item');
      beerItem.innerText = beer.name;
      var beerList = document.getElementById('beer-list');
      beerList.appendChild(beerItem);
      var detailsButton = document.createElement('div');
      detailsButton.setAttribute('class', 'beer-button');
      beerItem.appendChild(detailsButton);
      detailsButton.innerText = "DETAILS";
      console.log(beer.name);
   }
}

var loadDetails = function(beer){
   // call this method on the button click
   // add an event listener to each button
   // do a querySelector..?
}

var requestComplete = function(){
   debugger;
   if(this.status !== 200) return;
   var jsonString = this.responseText;
   beers = JSON.parse(jsonString);
   populateBeer(beers);
}

var app = function(){
   // debugger;
   var url = "https://api.punkapi.com/v2/beers";
   makeRequest(url, requestComplete);

}

window.addEventListener('load', app);
