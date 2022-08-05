import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  forecast: {},
  // chartData: [],
  error: "",
};

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  (cityname) => {
    return axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=0532b65c9cf14616992135956220308&q=${cityname}&days=1&aqi=no&alerts=no`
      )
      .then((response) => response.data);
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.loading = false;
      state.forecast = action.payload;
      state.error = "";
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = false;
      state.forecast = [];
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
