export const getCityApi = (cityName:string) =>{
    if (cityName === undefined)return {};
    return async dispatch => {
        try {
            debutUrl = 'https://geocoding-api.open-meteo.com/v1/search?name=';
            finUrl = '&language=fr';
            url= debutUrl.concat(cityName.concat(finUrl));
            const response = await fetch(url);
            const json = await response.json();
            const cities: City[] = json["results"].map(v => new City(v["name"],v["latitude"],v["longitude"]));
            dispatch(cities);
        } catch (error) {
            console.log("probleme : ",error);
        }
    }
}


export const getWeatherCityApi = (ville: City) =>
    if (City === undefined)return {};
    return async dispatch => {
        try {
            debutUrl = 'https://api.open-meteo.com/v1/meteofrance?latitude=';
            milieuUrl = '&longitude=';
            paramHourly = '&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,surface_pressure,cloudcover,windspeed_10m&timeformat=unixtime&start_date=2023-02-03&end_date=2023-02-03&timezone=Europe%2FBerlin';
            paramDaily ='&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&start_date=2023-03-10&end_date=2023-03-16&timezone=Europe%2FBerlin';
            miniUrl= debutUrl.concat(City.latitude.toString().concat(milieuUrl.concat(City.longitude.toString)));
            url= miniUrl.concat(paramHourly);
            url2= miniUrl.concat()
            const response = await fetch(url);
            const json = await response.json();
            const cities: City[] = json["results"].map(v => new City(v["name"],v["latitude"],v["longitude"]));
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

