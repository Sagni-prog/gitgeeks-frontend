import { configureStore } from "@reduxjs/toolkit";
import { channelReducer } from "../features/channel/channelSlice";

const store = configureStore({
    reducer: {
        channel: channelReducer,
    }
});

export default store;