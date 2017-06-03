const API_KEY = 'afe224f25cdf028a03b1b75949c0d9cc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = fetch(url).then(response => response.json());

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
