import { configureStore } from "@reduxjs/toolkit";
import { channelReducer } from "../features/channel/channelSlice";
import { messageReducer } from "../features/message/messageSlice";

const store = configureStore({
    reducer: {
        channel: channelReducer,
        message: messageReducer,
    }
});

export default store;