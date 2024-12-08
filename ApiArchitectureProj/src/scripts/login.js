import { globalHashPassword } from "../constants/globalPasswordHash";
import { endpoints } from "../constants/url.js";
import { getAllData } from "../services/http-services/httpClientService.js";
import { loginUser } from "../services/user-services/loginUserService";


const loginFormElem = document.getElementById("login");

loginFormElem.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const usernameOrEmail = document.getElementById("username_or_email").value;
    const password = document.getElementById("login_password").value;


    loginUser(usernameOrEmail,await globalHashPassword(password));

});


// const hashPassword = async (password)=>{
//     const encoder = new TextEncoder();
//     const data = encoder.encode(password);
//     const hashBuffer = await crypto.subtle.digest("SHA-384", data);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    
//     return hashHex;
// }

    