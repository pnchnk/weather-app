import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {
  weather: [],
};
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addToweather: (state, {payload}: PayloadAction<any>) => {
      if (state.weather.length > 1) {
        state.weather.shift();
        state.weather.push(payload);
      } else {
        state.weather.push(payload);
      }
    },
  },
});

export const {addToweather} = weatherSlice.actions;

export default weatherSlice.reducer;
