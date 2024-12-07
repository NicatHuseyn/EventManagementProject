import { BASE_URL, endpoints } from "../constants/url"
import axios from "axios";


export const axiosRequest = async (methodType, endpoint, payload = null)=>{
    const config = {
        methodType,
        url:`${BASE_URL}/${endpoints}`,
        payload:payload,
        headers:{
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios(config);
        return response
    } catch (error) {
        console.log(error);
        
    }
}