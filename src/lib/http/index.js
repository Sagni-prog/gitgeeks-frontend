import axios from "axios";
import storage from "../../utils/storage";

const token = storage.getToken();

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": 'Applcation/json',
        "Content-Type": 'applcation/json'
    }
})

export default http;