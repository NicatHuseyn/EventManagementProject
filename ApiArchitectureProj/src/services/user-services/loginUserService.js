import { globalHashPassword } from "../../constants/globalPasswordHash.js";
import { endpoints } from "../../constants/url.js";
import { getAllData } from "../http-services/httpClientService.js";


export const loginUser = (userNameOrEmail,password)=>{

    try {

        // const users = getAllData(endpoints.users).then(res=>res.data);

        // const user = users.find(u=>(u.username === userNameOrEmail || u.email === userNameOrEmail) && u.password === password);

        const user = {};

        getAllData(endpoints.users).then((res)=>{
            user = res.data.find(u=>(u.username === userNameOrEmail || u.email === userNameOrEmail) && u.password === password);
        })

        if (user) {
            // Create token
            const token = btoa(`${userNameOrEmail}:${password}`);
            // Set local storage
            localStorage.setItem("token",token);

            window.location.href = "/admin";
        }
        else{
            console.log("Invalid username or password.");
            
        }

    } catch (error) {
        console.log(error);
        
    }

}