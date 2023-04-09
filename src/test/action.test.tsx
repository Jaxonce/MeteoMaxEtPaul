import { setWeather } from '../../redux/actions/actionMeteoApi';
import { FETCH_WEATHER_API, RECUPERER_VILLES, RECHERCHER_VILLES, RECUPERER_METEO } from '../../redux/constants';
import City from '../model/City';
import { setVilleCherchee } from '../../redux/actions/actionRechercheVille';
import { setVillesList } from '../../redux/actions/actionRecupVille';
import Weather from '../model/Weather';

//@ts-ignore
describe('setWeather action', () => {
  //@ts-ignore
  it('should create an action to fetch weather data for a city', () => {
    const ville: City = new City("Paris", 48.866667, 2.333333, "FR");
    const expectedAction = {
      type: FETCH_WEATHER_API,
      payload: ville,
    };
    //@ts-ignore
    expect(setWeather(ville)).toEqual(expectedAction);
  });
});


//@ts-ignore
describe('setVilleCherchee action', () => {
  //@ts-ignore
  it('should create an action to set the city to search', () => {
    const nomVille = 'Paris';
    const expectedAction = {
      type: RECHERCHER_VILLES,
      payload: nomVille,
    };
    //@ts-ignore
    expect(setVilleCherchee(nomVille)).toEqual(expectedAction);
  });
});
// //@ts-ignore
// describe('setWeather action', () => {
//   //@ts-ignore
//   it('should create an action to set the weather', () => {
//     const weatherList: Weather[] = [
//       new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
//         "couvert", 7, -4.34,
//         82, 5.14, 1032,
//         new City("Paris", 48.866667, 2.333333, "FR")
//       ),
//       new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
//         "couvert", 5, -4.34,
//         82, 5.14, 1032,
//         new City("Lyon", 45.75, 4.85, "FR")
//       ),
//     ];
//     const expectedAction = {
//       type: RECUPERER_METEO,
//       payload: weatherList,
//     };
//     //@ts-ignore
//     expect(setWeather(weatherList)).toEqual(expectedAction);
//   });
// });


//@ts-ignore
describe('setVillesList action', () => {
  //@ts-ignore
  it('should create an action to set the list of cities', () => {
    const villesList: City[] = [
      new City("Paris", 48.866667, 2.333333, "FR"),
      new City("Lyon", 45.75, 4.85, "FR")
    ];
    const expectedAction = {
      type: RECUPERER_VILLES,
      payload: villesList,
    };
    //@ts-ignore
    expect(setVillesList(villesList)).toEqual(expectedAction);
  });
});