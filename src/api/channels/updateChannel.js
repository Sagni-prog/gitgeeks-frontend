import { httpWithToken } from "../../lib/http";

const channelUpdate = (id,data) => {
  return httpWithToken.put(`channels/${id}`,data);
}

export default channelUpdate;