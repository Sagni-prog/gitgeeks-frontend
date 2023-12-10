import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data: [],
   isLoaded: false,   
}

const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {
      setChannelState: (state, action) => {
          return {...state, ...action.payload }
       },
       updateChannel: (state, action) => {
         const { id } = action.payload;
         const channels = state.data.filter(channel => channel.id !== id);
         state.data = [...channels, action.payload.newChannel];
       },
    }
});

export const selectChannelState = (state) => state.channel;
export const selectAllChannels = (state) => state.channel.data;
export const selectChannelStatus = (state) => state.isLoaded;
export const selectSingleChannel = (state,channelId) => state.channel.data.find(state => state.id === channelId);
export const { setChannelState, updateChannel } = channelSlice.actions;
export const channelReducer = channelSlice.reducer;