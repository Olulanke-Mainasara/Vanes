geolocationSupported();

function geolocationSupported() {
  if (navigator.geolocation) {
    console.log("Geolocation is supported by this browser :)");
    getCurrentLocation();
  } else {
    console.log("Error: Geolocation is NOT supported by this browser :(");
  }
}

function gettingCurrentConditions(usingToDet, element) {
  switch (usingToDet) {
    case 0:
      element.innerText = "Clear sky";
      break;
    case 1:
      element.innerText = "Mainly clear";
      break;
    case 2:
      element.innerText = "Partly cloudy";
      break;
    case 3:
      element.innerText = "Overcast";
      break;
    case 45:
      element.innerText = "Fog";
      break;
    case 48:
      element.innerText = "Rime fog";
      break;
    case 51:
      element.innerText = "Drizzle: light";
      break;
    case 53:
      element.innerText = "Drizzle: moderate";
      break;
    case 55:
      element.innerText = "Drizzle: dense";
      break;
    case 56:
      element.innerText = "Freezing drizzle: light";
      break;
    case 57:
      element.innerText = "Freezing drizzle: dense";
      break;
    case 61:
      element.innerText = "Rain: slight";
      break;
    case 63:
      element.innerText = "Rain: moderate";
      break;
    case 65:
      element.innerText = "Rain heavy";
      break;
    case 66:
      element.innerText = "Freezing rain: light";
      break;
    case 67:
      element.innerText = "Freezing rain: heavy";
      break;
    case 71:
      element.innerText = "Snow fall: slight";
      break;
    case 73:
      element.innerText = "Snow fall: moderate";
      break;
    case 75:
      element.innerText = "Snow fall: heavy";
      break;
    case 77:
      element.innerText = "Snow grains";
      break;
    case 80:
      element.innerText = "Rain showers: slight";
      break;
    case 81:
      element.innerText = "Rain showers: moderate";
      break;
    case 82:
      element.innerText = "Rain showers: violent";
      break;
    case 85:
      element.innerText = "Snow showers: slight";
      break;
    case 86:
      element.innerText = "Snow showers: heavy";
      break;
    case 95:
      element.innerText = "Thunderstorm: moderate";
      break;
    case 96:
      element.innerText = "Thunderstorm: slight hail";
      break;
    case 99:
      element.innerText = "Thunderstorm: heavy hail";
      break;

    default:
      element.innerText = "Looks good :)";
      break;
  }
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition((result) => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${result.coords.latitude}&longitude=${result.coords.longitude}&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`
    )
      .then((resp) => resp.json())
      .then((jsonData) => {
        console.log(jsonData);

        const currentWeather = document.getElementById("currentWeather");
        currentWeather.innerText = jsonData.current_weather.temperature + "°";

        const currentLocation = document.getElementById("currentLocation");
        const timeZone = jsonData.timezone.split("/");
        currentLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${timeZone[1]}`;

        const currentCondition = document.getElementById("currentCondition");
        let weatherCode = jsonData.current_weather.weathercode;
        gettingCurrentConditions(weatherCode, currentCondition);
        
        const windSpeed = document.getElementById("windSpeed");
        windSpeed.innerText = jsonData.current_weather.windspeed;

        const dayForecasts = document.getElementById("dayForecasts")
        let position = 0;

        const accurateDate = new Date();
        console.log("The accurate date is: " + accurateDate.getDate());

        jsonData.daily.time.forEach(element => {
            let weatherCode = jsonData.daily.weathercode[position];
            console.log(weatherCode);

            let dayForecast = document.createElement("div");
            dayForecast.classList.add("w-full");
            dayForecast.classList.add("h-[20%]");
            dayForecast.classList.add("border-white");
            dayForecast.classList.add("border-b");

            let forecastId = "Forecast" + position;
            console.log(forecastId);

            let splittedElement = element.split("-");

            if (splittedElement[2] == accurateDate.getDate()) {
                dayForecast.innerHTML = `
                    <div class="flex justify-between items-center h-full">
                        <h1>Today</h1>
                        <h1 id=${forecastId}></h1>
                        <h1>22 -<span class="text-gray-500"> 37</span></h1>
                    </div>
                `; 
            }
            else {
                dayForecast.innerHTML = `
                    <div class="flex justify-between items-center h-full">
                        <h1>${splittedElement[2]}</h1>
                        <h1 id=${forecastId}></h1>
                        <h1>22 -<span class="text-gray-500"> 37</span></h1>
                    </div>
                `;
            }
            
            dayForecasts.append(dayForecast);

            const forecastResult = document.getElementById(`${forecastId}`);
            gettingCurrentConditions(weatherCode, forecastResult);

            position++;
        });
      })
      .catch((err) => console.log("Error: " + err));
  });
}
