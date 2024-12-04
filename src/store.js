import { configureStore } from "@reduxjs/toolkit";
import batteryReducer from "./slices/batterySlice";
import tyrePressureReducer from "./slices/tyrePressureSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        BatteryPercentages: batteryReducer,
        TyrePressures: tyrePressureReducer,
    },
});
