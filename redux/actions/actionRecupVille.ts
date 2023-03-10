export const setVillesList = (villesList: City[]) => {
    return {
        type: FETCH_CITIES,
        payload: villesList,
    };
}