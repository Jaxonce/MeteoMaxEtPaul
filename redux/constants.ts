export const CITIES_DATA: City[] = [
  new City("Paris", 48.866667, 2.333333),
  new City("Clermont-Ferrand", 45.777222, 3.087025),
  new City("Lyon", 45.764043, 4.835659),
  new City("Marseille", 43.296482, 5.36978),
  new City("Bruxelles", 50.85034, 4.35171),
];

export const FAVORITE_CITY_DATA =
  new City("Clermont-Ferrand", 45.777222, 3.087025);

export const DEFAULT_SELECTED_CITY_DATA: City =
  new City("Paris", 48.866667, 2.333333);

export const WEATHER_DATA: Weather[] = [
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 7, -4.34,
    82, 5.14, 1032,
    CITIES_DATA[0]
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 5, -4.34,
    82, 5.14, 1032,
    CITIES_DATA[1]
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 6, -4.34,
    82, 5.14, 1032,
    CITIES_DATA[2]
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 10, -4.34,
    82, 5.14, 1032,
    CITIES_DATA[3]
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 9, -4.34,
    82, 5.14, 1032,
    CITIES_DATA[4]
  ),
];
/*
export function RECUPERER_METEO(){
    return WEATHER_DATA;
}
export function RECUPERER_VILLES(){
    return CITIES_DATA;
}*/
export const RECUPERER_VILLES = 'RECUPERER_VILLES';
export const RECUPERER_METEO = 'RECUPERER_METEO';
export const RECHERCHER_VILLES = 'RECHERCHER_VILLES';
export const FETCH_WEATHER_API = 'FETCH_WEATHER_API';


export const getCurrentWeather = (cityName: string) => {
  if (cityName === undefined) return {};
  return WEATHER_DATA.filter(elt => elt.city.name === cityName)[0];
}
