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

export interface WeatherResponse {
  city?: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt?: number;
  cod?: number;
  list?: Weather[];
  message?: number;
}

export interface Weather {
  clouds?: {
    all: number;
  };
  dt?: number;
  dt_txt?: string;
  main?: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop?: number;
  rain?: {
    '3h': number;
  };
  sys?: {
    pod: string;
  };
  visibility?: number;
  weather?: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  wind?: {
    deg: number;
    gust: number;
    speed: number;
  };
  item?: Weather;
}
