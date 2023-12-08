import { http } from "../../../lib/http";

export const githubLogin = (sentData) => {
    return http.post('login/github',sentData);
} 