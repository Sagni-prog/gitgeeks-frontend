import { httpWithToken } from "../../lib/http";

const getAllChannels = (userId) => {
    return httpWithToken.get(`/channels/user/${userId}`);
}

export default getAllChannels;