const apiKey = 'd5846d018de3fd72b10cb81648daa551'; 

function getWeather() {
  const city = document.getElementById('city-input').value;
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 // °C

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('city-name').textContent = data.name + ', ' + data.sys.country;
      document.getElementById('weather-type').textContent = data.weather[0].description;
      document.getElementById('temp').textContent = data.main.temp;
      document.getElementById('min-temp').textContent = data.main.temp_min;
      document.getElementById('max-temp').textContent = data.main.temp_max;
    })
    .catch(error => {
      alert("City not found or API error");
      console.error(error);
    });
}
