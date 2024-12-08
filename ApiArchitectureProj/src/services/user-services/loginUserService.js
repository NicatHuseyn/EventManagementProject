
import { endpoints } from "../../constants/url.js";
import { axiosRequest } from "../../helpers/httpClientHelper.js"

// import { globalHashPassword } from "../../constants/globalPasswordHash.js";

import { getAllData } from "../http-services/httpClientService.js";




export const loginUser = (userNameOrEmail,password)=>{

    try {
        
        const user = {};
    
        getAllData(endpoints.users).then((res)=>{
            user = res.data.find(u=>(u.username === userNameOrEmail || u.email === userNameOrEmail) && u.password === password);
        })

        if (user) {
            // Create token
            const token = btoa(`${userNameOrEmail}:${password}`);
            // Set local storage
            localStorage.setItem("token",token);
            

            const accessToken = localStorage.getItem("token");
            if (token) {
                window.location.href = "/adminmanagement";
            }
            else{
                window.location.href("/");
            }
        }else{
            alert("Invalid Username or Email")
        }

    } catch (error) {
        console.log(error);
        
    }

}