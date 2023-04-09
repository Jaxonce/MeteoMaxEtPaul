import {CITIES_DATA, FAVORITE_CITY_DATA, WEATHER_DATA } from '../../data/stub';
import {FETCH_WEATHER_API, RECHERCHER_VILLES, RECUPERER_METEO, RECUPERER_VILLES} from '../constants';

const initialState = {
    meteo: WEATHER_DATA,
    villes: CITIES_DATA,
}

//@ts-ignore
export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_API:
            return {...state, meteo: action.payload};
        case RECHERCHER_VILLES:
            return {...state, villes: action.payload};
        case RECUPERER_METEO:
            return {...state, meteo: action.payload};
        case RECUPERER_VILLES:
            console.log("================================================================================================="+ action.payload)
            return {...state, villes: action.payload};
        default:
            return state;
    }
}