import axios from 'axios';

// Replace with actual backend URL
// For Android Emulator, use 'http://10.0.2.2:8000'
// For iOS Simulator, use 'http://localhost:8000'
// For physical device, use your machine's LAN IP
const API_URL = 'http://10.0.2.2:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

export const analyzeEmotion = async (text) => {
    try {
        const response = await api.post('/analyze', { text });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const fetchTrends = async () => {
    try {
        const response = await api.get('/journal');
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export default api;
