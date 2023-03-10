const initialState = {
    villes: [],
}

export default appReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_VILLE:
    // @ts-ignore
        return {...state, villes: action.payload};
    default:
        return state;
    }
}