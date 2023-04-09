import {RECUPERER_METEO} from '../constants';
import Weather from '../../src/model/Weather';

export const setWeather = (weatherList: Weather[]) => {
    return {
        type: RECUPERER_METEO,
        payload: weatherList,
    };
}