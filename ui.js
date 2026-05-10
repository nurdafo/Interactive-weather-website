export function updateUI(data, logic) {
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = Math.round(data.main.humidity);
  const wind = Math.round(data.wind.speed);

  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
  document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
  document.getElementById("feelsLike").textContent = `Feels like: ${feelsLike}°C`;
  document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
  document.getElementById("wind").textContent = `Wind: ${wind} m/s`;
  document.getElementById("feelsText").textContent = `Feels: ${logic.feeling}`;
  document.getElementById("clothesAdvice").textContent = `Advice: ${logic.advice}`;
}
