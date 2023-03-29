import {
  WeatherAction,
  WeatherState,
  WeatherActionTypes,
} from '../../types/weather';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: WeatherAction,
): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case WeatherActionTypes.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
