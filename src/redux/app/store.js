import { configureStore } from "@reduxjs/toolkit";
import weatherSlices from "../features/weatherSlices";

const store = configureStore({
  reducer: {
    weather: weatherSlices,
  },
});

export default store;
