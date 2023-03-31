const initialState = {
    meteo: [],
}

export default appReducer2 = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_WEATHER:
    // @ts-ignore
        return {...state, meteo: action.payload};
    default:
        return state;
    }
}