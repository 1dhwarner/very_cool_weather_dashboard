// // define variables

var search = document.querySelector('#search');
var city = document.querySelector('#city');
var cities = document.querySelector('#cities');


// save search items to local storage 

search.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (city.value.length < 1) return;

    cities.innerHTML += '<ul>' + city.value + '<ul>';

	// Clear input
	city.value = '';

	// Save the list to localStorage
	localStorage.setItem('city', cities.innerHTML);

}, false);
