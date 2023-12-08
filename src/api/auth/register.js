import { http } from "../../lib/http";

export const register = (data) => {
    return http.post('/register',data);
}