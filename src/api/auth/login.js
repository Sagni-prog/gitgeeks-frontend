import { http } from "../../lib/http";

export const login = (date) => {
    return http.post('/login',date);
}