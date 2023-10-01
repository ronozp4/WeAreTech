import axios from 'axios';
import { BASE_URL, endpoints } from '../assets/constansts';
import { SoundItemRequest } from './types';

// Axios instance with custom configuration
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});



// API functions for making requests
const apiFunctions = {
    getDrumSound:  async () : Promise<SoundItemRequest[]> => {
    try {
      const response = await api.get(endpoints.getDrumSound);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

};

export default apiFunctions;