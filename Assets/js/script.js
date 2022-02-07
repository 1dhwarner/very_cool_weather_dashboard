// define variables
var city = "";
var searchedCities = [];
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

var search = $("#search-city");
var searchButton = $(".search-button");

// openweather api key 
var APIKey = "b78502564bdb2b68696e0c9f19ef03ea";


// functions 

// clears out local storage 
// function deleteStorage () {
//     localStorage.clear();
//   };

// save previous searches to local storage 

$('.search-button').on("click", function (event) {
    event.preventDefault();
    city = city.parent(".searchBtn").sibilings(".textVal").val().trim();
    if (city === "") {
        return; 
    };
    cities.push(city);

    localStorage.setItem("city", JSON.stringify(searchedCities));
    fiveDayEl.empty();

    
    // save search to the side bar 
    getPreviousSearches();
    // displays selected cities weather to the main card as well as five day forecast 
    getCurrentWeather();
});


var searchedCities = $(".searchedCities");

function getSearchedCities() {
    searchedCities.empty();

    for (let i = 0; i < searchedCities.length; i++) {

        var rowEl = $("<row>");
        var btnEl = $("<button>").text(`${searchedCities[i]}`)

        rowEl.addClass("row searchedBtnRow");
        btnEl.addClass("btn searchedBtn");

        searchedCities.prepend(rowEl);
        rowEl.append(btnEl);
    } if (!city) {
        return;
    }

    $('.searchedBtn').on("click", function (event) {
		event.preventDefault();
		city = $(this).text();
		fiveForecastEl.empty();
		getWeatherToday();
	});
};

// Displays weather data to the main card 

function getCurrentWeather() {
    var openweatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&apikey=${APIKey}";

    $(cardTodayBody).empty();

    fetch({

    }).then(function (response) {
		$('.cardTodayCityName').text(response.name);
		$('.cardTodayDate').text(date);
		//Icons
		$('.icons').attr('src', `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
		// Temperature
		var pEl = $('<p>').text(`Temperature: ${response.main.temp} °F`);
		cardTodayBody.append(pEl);
		//Feels Like
		var pElTemp = $('<p>').text(`Feels Like: ${response.main.feels_like} °F`);
		cardTodayBody.append(pElTemp);
		//Humidity
		var pElHumid = $('<p>').text(`Humidity: ${response.main.humidity} %`);
		cardTodayBody.append(pElHumid);
		//Wind Speed
		var pElWind = $('<p>').text(`Wind Speed: ${response.wind.speed} MPH`);
		cardTodayBody.append(pElWind);
		//Set the lat and long from the searched city
		var cityLon = response.coord.lon;
		// console.log(cityLon);
		var cityLat = response.coord.lat;
		// console.log(cityLat);

		var getUrlUvi = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,daily,minutely&appid=${key}`;

		fetch({
			url: getUrlUvi,
			method: 'GET',
		}).then(function (response) {
			var pElUvi = $('<p>').text(`UV Index: `);
			var uviSpan = $('<span>').text(response.current.uvi);
			var uvi = response.current.uvi;
			pElUvi.append(uviSpan);
			cardTodayBody.append(pElUvi);
        });
        getFiveDayForecast();
    });
};





// save buttons for previous searches