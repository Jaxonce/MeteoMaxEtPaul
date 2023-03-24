import {RECUPERER_METEO} from '../constants';

export const setWeather = (weather: Weather[]) => {
    return {
        type: RECUPERER_METEO,
        payload: weatherList,
    };
}