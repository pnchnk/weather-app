import {
  FetchWeatherRequestAction,
  FetchWeatherSuccessAction,
  FetchWeatherFailureAction,
  WeatherActionTypes,
} from '../../types/weather';

export const fetchWeatherRequest = (
  lat: number,
  lon: number,
): FetchWeatherRequestAction => ({
  type: WeatherActionTypes.FETCH_WEATHER_REQUEST,
  payload: {lat, lon},
});

export const fetchWeatherSuccess = (data: any): FetchWeatherSuccessAction => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (
  error: string,
): FetchWeatherFailureAction => ({
  type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
  payload: error,
});
