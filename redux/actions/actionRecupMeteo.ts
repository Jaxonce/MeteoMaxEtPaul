import {RECUPERER_METEO, Weather} from '../constants';

export const setWeather = (weatherList: Weather[]) => {
    return {
        type: RECUPERER_METEO,
        payload: weatherList,
    };
}