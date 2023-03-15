const initialState = {
    villes: [],
}

export default villeRechercheReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_VILLES:
        return {...state, villes: state.villes.push(action.payload)};
    default:
        return state;
    }
}