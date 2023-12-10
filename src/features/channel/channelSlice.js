import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data: [],
   isLoaded: false,   
}

const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {
       getChannel: (state, action) => {
          return {...state, ...action.payload }
       }
    }
});

export const selectChannelState = (state) => state.channel;
export const selectAllChannels = (state) => state.channel.data;
export const selectChannelStatus = (state) => state.isLoaded;
export const selectSingleChannel = (state,channelId) = (state) => state.id === channelId;
const { getChannel } = channelSlice.actions;
export const channelReducer = channelSlice.reducer;