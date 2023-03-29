export interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

export enum WeatherActionTypes {
  FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE',
}

export interface FetchWeatherRequestAction {
  type: WeatherActionTypes.FETCH_WEATHER_REQUEST;
  payload: {
    lat: number;
    lon: number;
  };
}

export interface FetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: any;
}

export interface FetchWeatherFailureAction {
  type: WeatherActionTypes.FETCH_WEATHER_FAILURE;
  payload: string;
}

export type WeatherAction =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;
