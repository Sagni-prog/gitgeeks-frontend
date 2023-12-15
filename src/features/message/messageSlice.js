import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  nexLink: '',
  isLoaded: false,
  initialLoad: false,
  isAdded: false,
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessages: (state,action) => {
            return {
                ...state,
                 ...action.payload,
                 initialLoad: false,
                }
        },
        addMessages: (state, action) => {
            return {
                ...state,
                messages: [...action.payload.messages.reverse(), ...state.messages],
                nexLink: action.payload.nexLink,
                isLoaded: true,
                isAdded: true
            }
        },
        setLoading: (state, action) => {
            return {
                ...state,
                isLoaded: action.payload.isLoaded
            }
        },
        setInitialLoad: (state, action) => {
            return {
                ...state,
                initialLoad: action.payload.initialLoad
            }
        },
    }
});

export const { setMessages, addMessages, setLoading, setInitialLoad } = messageSlice.actions;
export const selectMessages = (state) => state.message;
export const selectLoadingState = (state) => state.message.isLoaded;
export const selectNextLink = (state) => state.message.nexLink;
export const selectInitialLoad = (state) => state.message.initialLoad;
export const selectIsAdded = (state) => state.message.isAdded
export const messageReducer = messageSlice.reducer;