// <!-- <option value="" selected disabled>Select your gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option> -->

import { endpoints } from "../constants/url";
import { getAllData } from "../services/http-services/httpClientService";



const formElem = document.getElementById("signup");

const eventId = document.querySelector(".eventId");
const userId = document.querySelector(".userId");



formElem.addEventListener("submit",(e)=>{
    e.preventDefault();

});

const users;

getAllData(endpoints.users).then((res)=>{
    users.push(res.data);
    for (let i = 0; i < res.data.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", res.data[i].username);
        option.innerHTML = res.data[i].fullname
        
        
        
    }
})

console.log(users);

getAllData(endpoints.users);