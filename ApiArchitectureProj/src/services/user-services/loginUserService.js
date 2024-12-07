import { endpoints } from "../../constants/url.js";
import { axiosRequest } from "../../helpers/httpClientHelper.js"
import { getAllData } from "../http-services/httpClientService.js";


export const loginUser = (userNameOrEmail,password)=>{

    try {
        
        const users = getAllData(endpoints.users).then(res=>res.data);

        const user = users.find(u=>(u.username === userNameOrEmail || u.email === userNameOrEmail) && u.password === password);

        if (user) {
            // Create token
            const token = btoa(`${userNameOrEmail}:${password}`);
            // Set local storage
            localStorage.setItem("token",token);

            window.location.href = "/adminpanel"; // Admin panele yonlenme

        }

    } catch (error) {
        
    }

}