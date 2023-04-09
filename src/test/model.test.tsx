import City from '../model/City';

import Weather from '../model/Weather';

//@ts-ignore
describe('City', () => {
    //@ts-ignore
  it('should create a new city object with the correct values', () => {
    const name = 'Paris';
    const latitude = 48.8566;
    const longitude = 2.3522;
    const pays = 'France';
    const city = new City(name, latitude, longitude, pays);
    //@ts-ignore
    expect(city.name).toBe(name);
    //@ts-ignore
    expect(city.latitude).toBe(latitude);
    //@ts-ignore
    expect(city.longitude).toBe(longitude);
    //@ts-ignore
    expect(city.pays).toBe(pays);
  });

  //@ts-ignore
  it('should update the city name correctly', () => {
    const name = 'Paris';
    const latitude = 48.8566;
    const longitude = 2.3522;
    const pays = 'France';
    const city = new City(name, latitude, longitude, pays);
    const newName = 'Marseille';
    city.name = newName;
    //@ts-ignore
    expect(city.name).toBe(newName);
  });

  //@ts-ignore
  it('should update the city latitude correctly', () => {
    const name = 'Paris';
    const latitude = 48.8566;
    const longitude = 2.3522;
    const pays = 'France';
    const city = new City(name, latitude, longitude, pays);
    const newLatitude = 43.2965;
    city.latitude = newLatitude;
    //@ts-ignore
    expect(city.latitude).toBe(newLatitude);
  });

  //@ts-ignore
  it('should update the city longitude correctly', () => {
    const name = 'Paris';
    const latitude = 48.8566;
    const longitude = 2.3522;
    const pays = 'France';
    const city = new City(name, latitude, longitude, pays);
    const newLongitude = 5.3698;
    city.longitude = newLongitude;
    //@ts-ignore
    expect(city.longitude).toBe(newLongitude);
  });

  //@ts-ignore
  it('should update the city pays correctly', () => {
    const name = 'Paris';
    const latitude = 48.8566;
    const longitude = 2.3522;
    const pays = 'France';
    const city = new City(name, latitude, longitude, pays);
    const newPays = 'Spain';
    city.pays = newPays;
    //@ts-ignore
    expect(city.pays).toBe(newPays);
  });
});

//@ts-ignore
describe('Weather', () => {
  const city = new City('Paris', 48.8534, 2.3488, 'France');
  const weather = new Weather('2023-04-09 12:00', 10000, 'Clear', 'Clear sky', 20, 22, 60, 10, 1013, city);

  //@ts-ignore
  it('should create a Weather object', () => {
    //@ts-ignore
    expect(weather).toBeDefined();
  });
//@ts-ignore
  it('should get and set the "at" property', () => {
    weather.at = '2023-04-09 13:00';
    //@ts-ignore
    expect(weather.at).toEqual('2023-04-09 13:00');
  });
//@ts-ignore
  it('should get and set the "visibility" property', () => {
    weather.visibility = 5000;
    //@ts-ignore
    expect(weather.visibility).toEqual(5000);
  });
//@ts-ignore
  it('should get and set the "weatherType" property', () => {
    weather.weatherType = 'Rain';
    //@ts-ignore
    expect(weather.weatherType).toEqual('Rain');
  });
//@ts-ignore
  it('should get and set the "weatherDescription" property', () => {
    weather.weatherDescription = 'Light rain';
    //@ts-ignore
    expect(weather.weatherDescription).toEqual('Light rain');
  });
//@ts-ignore
  it('should get and set the "temperature" property', () => {
    weather.temperature = 25;
    //@ts-ignore
    expect(weather.temperature).toEqual(25);
  });
//@ts-ignore
  it('should get and set the "temperatureFeelsLike" property', () => {
    weather.temperatureFeelsLike = 27;
    //@ts-ignore
    expect(weather.temperatureFeelsLike).toEqual(27);
  });
//@ts-ignore
  it('should get and set the "humidity" property', () => {
    weather.humidity = 70;
    //@ts-ignore
    expect(weather.humidity).toEqual(70);
  });
//@ts-ignore
  it('should get and set the "windSpeed" property', () => {
    weather.windSpeed = 15;
    //@ts-ignore
    expect(weather.windSpeed).toEqual(15);
  });
//@ts-ignore
  it('should get and set the "pressure" property', () => {
    weather.pressure = 1010;
    //@ts-ignore
    expect(weather.pressure).toEqual(1010);
  });
//@ts-ignore
  it('should get and set the "city" property', () => {
    const newCity = new City('Marseille', 43.2965, 5.3698, 'France');
    weather.city = newCity;
    //@ts-ignore
    expect(weather.city).toEqual(newCity);
  });
});