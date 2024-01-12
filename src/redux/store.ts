import { baseAPI } from "@/services/baseApi";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(baseAPI.middleware),
});

export default store;
