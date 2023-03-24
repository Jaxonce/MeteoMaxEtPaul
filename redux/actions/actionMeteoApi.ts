import {FETCH_WEATHER_API} from '../constants';

export const setWeather = (ville: City)=>{
    return {
        type: FETCH_WEATHER_API,
        payload: ville,
    };
}