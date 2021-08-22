import axios from 'axios';
import { API_BASE_URL } from '../../environment/init';

export const http = axios.create({
  baseURL: API_BASE_URL
});