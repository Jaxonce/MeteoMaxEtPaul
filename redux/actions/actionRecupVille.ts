import { City } from '../../data/stub';
import {RECUPERER_VILLES} from '../constants';

export const setVillesList = (villesList: City[]) => {
    return {
        type: RECUPERER_VILLES,
        payload: villesList,
    };
}