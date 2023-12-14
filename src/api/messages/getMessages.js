import { httpWithToken, getNextRequst } from "../../lib/http";

export const getChannelMessages = (channelId) => {

    return httpWithToken(`messages/channel/${channelId}`);
}

export const getNextPageMessages = (url) => {
    console.log("from the api:", url)
    return getNextRequst(url);
}