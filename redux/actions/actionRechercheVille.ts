import {FETCH_VILLES} from '../constants';

export const setVilleCherchee = (nomVille: string)=>{
    return {
        type: FETCH_VILLES,
        payload: nomVille,
    };
}