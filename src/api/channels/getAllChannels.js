import http from "../../lib/http";

const getAllChannels = (userId) => {
    return http.get(`/channels/user/${userId}`);
}

export default getAllChannels;