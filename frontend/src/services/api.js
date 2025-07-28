import axios from 'axios';
import config from '../config';
const API_URL = `${config.Backend_Api}/api/properties`;

export const getProperties = () => axios.get(API_URL);
export const getProperty = (id) => axios.get(`${API_URL}/${id}`);
export const createProperty = (property) => axios.post(API_URL, property);
export const updateProperty = (id, property) => axios.put(`${API_URL}/${id}`, property);
export const deleteProperty = (id) => axios.delete(`${API_URL}/${id}`);