import {RECHERCHER_VILLES} from '../constants';

export const setVilleCherchee = (nomVille: string)=>{
    return {
        type: RECHERCHER_VILLES,
        payload: nomVille,
    };
}