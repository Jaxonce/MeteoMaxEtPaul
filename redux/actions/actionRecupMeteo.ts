

export const setWeather = (weather: Weather => {
  return {
    type: FETCH_WEATHER,
    payload: weatherList,
  };
}