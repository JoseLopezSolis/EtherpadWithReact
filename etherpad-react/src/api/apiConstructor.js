// Define the base URL
const BASE_URL = 'http://localhost:9001/api';
const API_KEY = '311ea29fe4a4ae8b9bdcae5e9341717a2b3173edaa12e5def1ceeb67b7a75f19'; // Replace with your actual API key

// Function to construct the URL
export const constructUrl = (apiVersion, functionName, params = {}) => {
    let url = `${BASE_URL}/${apiVersion}/${functionName}?apikey=${API_KEY}`;
    for (const [key, value] of Object.entries(params)) {
        url += `&${key}=${value}`;
    }
    return url;
};