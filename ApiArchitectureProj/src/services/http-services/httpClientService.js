import axios from "axios"
import { BASE_URL } from "../../constants/url";


export const getAllData = async (endpoint)=>{
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response;
    } catch (error) {
        console.log(error.message);
        
    }
}

// Get Data By Id
export const getDataById = async (endpoint, id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Create Data
export const createData = async (endpoint, payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload, {
            'Content-Type': 'application/json',
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}


// Update Data
export const updateData = async (endpoint, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}`, payload);
        return response
    } catch (error) {
        console.log(error);
    }
}

// Delete Data
export async function deleteData(endpoints, id) {
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoints}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}