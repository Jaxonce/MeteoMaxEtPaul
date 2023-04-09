import appReducer from '../../redux/reducers/appReducer';

const initialState = {
  meteo: {},
  villes: {},
};
//@ts-ignore
describe('appReducer', () => {
  // //@ts-ignore
  // it('should return the initial state', () => {
  //   //@ts-ignore
  //   expect(appReducer(undefined, {})).toEqual(initialState);
  // });
  //@ts-ignore
  it('should handle FETCH_WEATHER_API', () => {
    const action = {
      type: 'FETCH_WEATHER_API',
      payload: { weather: 'sunny' },
    };
    const expectedState = {
      ...initialState,
      meteo: { weather: 'sunny' },
    };
    //@ts-ignore
    expect(appReducer(initialState, action)).toEqual(expectedState);
  });
  //@ts-ignore
  it('should handle RECHERCHER_VILLES', () => {
    const action = {
      type: 'RECHERCHER_VILLES',
      payload: { city: 'Paris' },
    };
    const expectedState = {
      ...initialState,
      villes: { city: 'Paris' },
    };
    //@ts-ignore
    expect(appReducer(initialState, action)).toEqual(expectedState);
  });
  //@ts-ignore
  it('should handle RECUPERER_METEO', () => {
    const action = {
      type: 'RECUPERER_METEO',
      payload: { weather: 'cloudy' },
    };
    const expectedState = {
      ...initialState,
      meteo: { weather: 'cloudy' },
    };
    //@ts-ignore
    expect(appReducer(initialState, action)).toEqual(expectedState);
  });
  //@ts-ignore
  it('should handle RECUPERER_VILLES', () => {
    const action = {
      type: 'RECUPERER_VILLES',
      payload: { city: 'New York' },
    };
    const expectedState = {
      ...initialState,
      villes: { city: 'New York' },
    };
    //@ts-ignore
    expect(appReducer(initialState, action)).toEqual(expectedState);
  });
});