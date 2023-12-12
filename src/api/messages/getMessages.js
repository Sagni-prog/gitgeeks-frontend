import { httpWithToken, getNextRequst } from "../../lib/http";

export const getChannelMessages = (channel_id) => {
    return httpWithToken(`messages/channel/${channel_id}`);
}

export const getNextPageMessages = (url) => {
    console.log("from the api:", url)
    return getNextRequst(url);
}