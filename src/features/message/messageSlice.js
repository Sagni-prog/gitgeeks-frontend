import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  nexLink: '',
  isLoaded: false,
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessages: (state,action) => {
            return {...state, ...action.payload}
        },
        addMessages: (state, action) => {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
                nexLink: action.payload.nexLink,
                isLoaded: true
            }
        }
    }
});

export const { setMessages, addMessages } = messageSlice.actions;
export const selectMessages = (state) => state.message;
export const selectLoadingState = (state) => state.message.isLoaded;
export const selectNextLink = (state) => state.message.nexLink;
export const messageReducer = messageSlice.reducer;