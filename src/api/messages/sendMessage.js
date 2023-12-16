import { httpWithToken } from "../../lib/http";

export const sendChannelMessage = (id, sentData) => {
    return httpWithToken.post(`/messages/channel/${id}`,sentData);
}