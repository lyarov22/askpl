<<<<<<< HEAD
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lessons {
    name: string | null
    floor: number | null
}

const initialState: Lessons = {
    name: null,
    floor: null
};

const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        setLessons: (state, action: PayloadAction<Lessons>) => {
            state.name = action.payload.name
        },
        setFloor: (state, action: PayloadAction<Lessons>) => {
            state.floor = action.payload.floor
        }
    },
});

export const { setLessons, setFloor } = lessonsSlice.actions;
export default lessonsSlice.reducer;
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lessons {
    name: string | null
    floor: number | null
}

const initialState: Lessons = {
    name: null,
    floor: null
};

const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        setLessons: (state, action: PayloadAction<Lessons>) => {
            state.name = action.payload.name
        },
        setFloor: (state, action: PayloadAction<Lessons>) => {
            state.floor = action.payload.floor
        }
    },
});

export const { setLessons, setFloor } = lessonsSlice.actions;
export default lessonsSlice.reducer;
>>>>>>> 371cf54bedeb27775e4f2771ea1059ca51292e94
