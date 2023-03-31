import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {WeatherActionTypes} from '../../types/weather';
import {fetchWeatherSuccess, fetchWeatherFailure} from '../actions/weather';

function* fetchWeather(action: any) {
  try {
    const {data} = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/forecast?lat=${action.payload.lat}&lon=${action.payload.lon}&appid=fce8b137fa557d3a5d45787595d914a2&units=metric`,
    );
    yield put(fetchWeatherSuccess(data));
  } catch (error: any) {
    yield put(fetchWeatherFailure(error.message));
  }
}

//watcher
export function* weatherSaga() {
  yield takeLatest(WeatherActionTypes.FETCH_WEATHER_REQUEST, fetchWeather);
}
