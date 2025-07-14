import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bugs';

export const fetchBugs = () => axios.get(API_URL);
export const createBug = (data) => axios.post(API_URL, data);
export const updateBug = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBug = (id) => axios.delete(`${API_URL}/${id}`);
