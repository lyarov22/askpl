import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RfidState {
    uid: string | null;
    waitingForTag: boolean;
}

const initialState: RfidState = {
    uid: null,
    waitingForTag: false,
};

const rfidSlice = createSlice({
    name: 'rfid',
    initialState,
    reducers: {
        startWaitingForTag: (state) => {
            state.waitingForTag = true;
            state.uid = null;
        },
        stopWaitingForTag: (state) => {
            state.waitingForTag = false;
        },
        setTagUid: (state, action: PayloadAction<string>) => {
            state.uid = action.payload;
            state.waitingForTag = false;
        },
    },
});

export const { startWaitingForTag, stopWaitingForTag, setTagUid } = rfidSlice.actions;

export default rfidSlice.reducer;
