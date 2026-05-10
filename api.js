const API_KEY = "775e83e3956e1459693e337fb22bde69";

export async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
