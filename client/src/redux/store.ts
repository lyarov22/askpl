import { configureStore } from '@reduxjs/toolkit';
import rfidReducer from './slices/rfidSlice';

const store = configureStore({
    reducer: {
        rfid: rfidReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
