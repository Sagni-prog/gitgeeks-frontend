import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data: [],
   isLoaded: false,   
   singleChannelId: '',
   load: false,
   channel: {
      channelName: "",
      description: ""
   }
  
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
      setSingleChannel: (state, action) => {
         return {
            ...state,
            singleChannelId: action.payload.id,
            load: true
         }
      },
      setSelectedChannel: (state, action) => {
         const { channelId } = action.payload;
         const channel = state.data.find(channel => channel.id === channelId);
         console.log("this is channel from slice:", channel);
       
         return {
           ...state,
           channel: {
             ...state.channel, 
             title: "this is title",
             description: "this is test"
           }
         };
       }
       
    }
});

export const selectChannelState = (state) => state.channel;
export const selectAllChannels = (state) => state.channel.data;
export const selectChannelStatus = (state) => state.isLoaded;
export const selectSingleChannel = (state) => state.channel.singleChannelId;
export const selectedChannel = (state) => state.channel.channel;
export const selectChannel = (state, id) => state.channel.data.find((channel) => channel.id === id);
export const selectLoad = (state) => state.channel.load;
export const { setChannelState, updateChannel, setSingleChannel,setSelectedChannel } = channelSlice.actions;
export const channelReducer = channelSlice.reducer;