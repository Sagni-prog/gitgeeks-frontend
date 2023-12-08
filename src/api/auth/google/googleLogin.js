import { http } from "../../../lib/http";

export const googleLogin = (sentData) => {
    return http.post('auth/google',sentData)
}