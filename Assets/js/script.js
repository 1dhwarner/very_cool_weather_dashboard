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
var cityHistory = JSON.parse(localStorage.getItem('cityHistory')) || []

var key = 'b78502564bdb2b68696e0c9f19ef03ea'
function searchWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=b78502564bdb2b68696e0c9f19ef03ea', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var windValue = data['wind']['speed'];
            var humidityValue = data['main']['humidity'];


            nameInput.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            wind.innerHTML = windValue;
            humidity.innerHTML = humidityValue;

            var latValue = data['coord']['lat'];
            var lonValue = data['coord']['lon'];

            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latValue + '&lon=' + lonValue + '&appid=b78502564bdb2b68696e0c9f19ef03ea', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    var uvIndexValue = data['daily']['uvi'];

                    uvIndex.innerHTML = uvIndexValue;
                }

                )


        })
        .catch(err => alert('Wrong city name!'))
}
// button.addEventListener('click', function () {


// current date / time  
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

// save search items to local storage 

search.addEventListener('submit', function (event) {

    // Don't submit the form
    event.preventDefault();

    // Ignore it if the wishlist item is empty
    if (inputValue.value.length < 1) return;
    if (cityHistory.indexOf(inputValue.value) === -1) {
        var cityButton = document.createElement('button')
        cityButton.innerText = inputValue.value;
        cityButton.addEventListener('click', function (event) {
            var cityName = event.target.innerText;
            // search weather for this city 
            searchWeather(cityName);
        })
        cities.append(cityButton);
        cityHistory.push(inputValue.value);
        localStorage.setItem('cityHistory', JSON.stringify(cityHistory));
    }
    searchWeather(inputValue.value.trim());

    // Clear input
    inputValue.value = '';




}, false);


