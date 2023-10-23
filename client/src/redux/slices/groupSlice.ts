import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Group {
    name: string | null;
}

const initialState: Group = {
    name: null,
};

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        setGroup: (state, action: PayloadAction<Group>) => {
            state.name = action.payload.name;
        },
    },
});

export const { setGroup } = groupSlice.actions;
export default groupSlice.reducer;
