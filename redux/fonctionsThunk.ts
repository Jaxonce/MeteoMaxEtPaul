import { setVillesList } from "./actions/actionRecupVille";
import City from "../src/model/City";

export const getCityApi = (cityName:string) =>{
    if (cityName === undefined)return {};
    //@ts-ignore
    return async dispatch => {
        try {
            const debutUrl = 'https://geocoding-api.open-meteo.com/v1/search?name=';
            const finUrl = '&language=fr';
            //@ts-ignore
            url= debutUrl.concat(cityName.concat(finUrl));
            //@ts-ignore
            console.log(url)
            //@ts-ignore
            const response = await fetch(url);
            const json = await response.json();
            console.log(json)
            //@ts-ignore
            const cities: City[] = json["results"].map(ville => new City(ville["name"],ville["latitude"],ville["longitude"], ville["country_code"]));
            dispatch(setVillesList(cities));
        } catch (error) {
            console.log("probleme : ",error);
        }
    }
}


export const getWeatherCityApi = (ville: City) => {
    if(City === undefined)return {};
    return async (dispatch: (arg0: City) => void) => {
        try {
            const debutUrl = 'https://api.open-meteo.com/v1/meteofrance?latitude=';
            const milieuUrl = '&longitude=';
            const paramHourly = '&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,surface_pressure,cloudcover,windspeed_10m&timeformat=unixtime&start_date=2023-02-03&end_date=2023-02-03&timezone=Europe%2FBerlin';
            const paramDaily ='&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&start_date=2023-03-10&end_date=2023-03-16&timezone=Europe%2FBerlin';
            const miniUrl= debutUrl.concat(City.arguments.latitude.toString().concat(milieuUrl.concat(City.arguments.longitude.toString)));
            const url= miniUrl.concat(paramHourly);
            const url2= miniUrl.concat()
            const response = await fetch(url);
            const json = await response.json();
            //@ts-ignore
            const cities: City[] = json["results"].map(ville => new City(ville["name"],ville["latitude"],ville["longitude"],ville["countryCode"]));
            dispatch(cities[0]);
        } catch (error) {
            console.log("probleme : ",error);
        }
    }
}
/*
new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Paris", 48.866667, 2.333333)
)*/
/*
export const apiUrlBuilder = (lieu: City) => {
    if (lieu === undefined) return {};

}
export const getCurrentWeather = (cityName: string) => {
    if (cityName === undefined) return {};
    return WEATHER_DATA.filter(elt => elt.city.name === cityName)[0];
    string url = 'https://api.open-meteo.com/v1/meteofrance?latitude='+45.75+'&longitude='+3.11+'&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,surface_pressure,cloudcover,windspeed_10m&timeformat=unixtime&start_date='+2023-02-03+'&end_date='+2023-02-03+'&timezone=Europe%2FBerlin

fetch(https://api.open-meteo.com/v1/meteofrance?latitude=45.75&longitude=3.11&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,surface_pressure,cloudcover,windspeed_10m&timeformat=unixtime&start_date=2023-02-03&end_date=2023-02-03&timezone=Europe%2FBerlin

    const response = fetch(url);
    const json = await response.json();
}*/

