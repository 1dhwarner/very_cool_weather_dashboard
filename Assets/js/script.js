// // define variables

var search = document.querySelector('#search');
var inputValue = document.querySelector('.inputValue');
var cities = document.querySelector('#cities');
var button = document.querySelector('.button');
var nameInput = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvIndex = document.querySelector('.uvIndex'); 

var key = 'b78502564bdb2b68696e0c9f19ef03ea'

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value.trim()+'&units=imperial&appid=b78502564bdb2b68696e0c9f19ef03ea')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']; 
        var humidityValue = data['main']['humidity'];
        // var uvIndexValue = data ['main']['']

        nameInput.innerHTML =nameValue;
        temp.innerHTML =tempValue;
        wind.innerHTML =windValue;
    
    })

.catch(err => alert('Wrong city name!'))
});

// current date / time  
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

// save search items to local storage 

search.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (inputValue.value.length < 1) return;

    cities.innerHTML += '<ul>' + inputValue.value + '<ul>';

	// Clear input
	inputValue.value = '';

	// Save the list to localStorage
	localStorage.setItem('city', cities.innerHTML);


}, false);

