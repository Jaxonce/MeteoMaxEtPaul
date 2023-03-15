import {configureStore} from '@reduxjs/toolkit'
import appReducer from './reducers/appReducer';
import VilleRechercheReducer from './reducers/VilleRechercheReducer';

// Reference here all your application reducers
const reducer = {
    appReducer: appReducer,
    VilleRechercheReducer: VilleRechercheReducer,
}

// @ts-ignore
const store = configureStore({
    reducer,
},);

export default store;