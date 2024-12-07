import axios from "axios"
import { BASE_URL, endpoints } from "../../constants/url";


export const registerUser = async (user)=>{
    try {
        const response = await axios.post(`${BASE_URL}/${endpoints.users}`,user,{
            headers:{ 'Content-Type': 'application/json'}
        });

        return {success:true, data:response.data};
    } catch (error) {
        console.log(error);
        
    }
}