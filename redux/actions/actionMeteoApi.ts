import {FETCH_WEATHER_API} from '../constants';
import City from '../../src/model/City';

export const setWeather = (ville: City)=>{
    return {
        type: FETCH_WEATHER_API,
        payload: ville,
    };
}