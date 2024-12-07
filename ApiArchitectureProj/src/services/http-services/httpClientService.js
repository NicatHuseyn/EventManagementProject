import { axiosRequest } from "../../helpers/httpClientHelper.js";


// Get All Data
export const getAllData = (endpoint)=> axiosRequest('get',endpoint);

export const getDataById = (endpoint, id)=> axiosRequest('get',`${endpoint}/${id}`);

// Create Data
export const createData = (endpoint,payload)=>axiosRequest('post',endpoint,payload);

// Update Data
export const updateData = (endpoint, id,payload) => axiosRequest('put', `${endpoint}/${id}`, payload);

// Update with patch
export const updateDataByPatch = (endpoint, payload) => axiosRequest('patch', `${endpoint}/${id}`, payload);

// Delete Data
export const deleteData = (endpoint, id) => axiosRequest('delete', `${endpoint}/${id}`);