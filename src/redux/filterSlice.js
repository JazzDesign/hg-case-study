import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    continent: 'all',
    metric: 'all',
    max: '5',
  },
  reducers: {
    updateContinent: (state, action) => {
      state.continent = action.payload;
    },
    updateMetric: (state, action) => {
      state.metric = action.payload;
    },
    updateMax: (state, action) => {
      state.max = action.payload;
    },
  },
});

export const { updateContinent, updateMetric, updateMax } = filterSlice.actions;

export default filterSlice.reducer;