import { TOKEN, URL } from '@/shared/utils/constants';
import axios from 'axios';

const api = axios.create({
    baseURL: `${URL}`,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
    }
});

export default api;
