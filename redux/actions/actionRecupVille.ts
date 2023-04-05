import {RECUPERER_VILLES} from '../constants';
import City from '../../src/model/City';

export const setVillesList = (villesList: City[]) => {
    return {
        type: RECUPERER_VILLES,
        payload: villesList,
    };
}