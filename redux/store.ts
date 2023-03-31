import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

//redux-saga
import createSagaMiddleware from '@redux-saga/core';
import {weatherSaga} from './sagas/weather';

//reducers
import {weatherReducer} from './reducers/weather';
import weatherSlice from './slice/dayWeather';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
  weather: weatherReducer,
  day: weatherSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(weatherSaga);

export type AppState = ReturnType<typeof weatherReducer>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
