import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        setToggle: (state,action) => {
            return {...state, ...action.payload}
        }
    }
});

export const selectToggle = (state) => state.toggle;
export const { setToggle } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;