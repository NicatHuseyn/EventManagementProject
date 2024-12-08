import axios from "axios";
import {getDataById} from "../services/http-services/httpClientService."
import { BASE_URL, endpoints } from "../constants/url";

const box = document.querySelector(".box");

const Id = new URLSearchParams(window.location.search).get("id");

document.addEventListener("DOMContentLoaded", async ()=>{
    const response = getDataById(`${BASE_URL}/${endpoints.events}`, Id);
    renderEvent(response)
    // try {
        // const response = await axios.get(`${BASE_URL}/${endpoint}/${Id}`)
        // const  data = await response.data;
        // if (data) {
        //     renderEvent()
            // FUNCTION
        // }
    // } catch (error) {
    //     console.error(error);
    // }
})

function renderEvent(array) {
    box.innerHTML="";
    array.forEach(event => {
        box.innerHTML += `
            <div>

            </div>
        `
    });

    const deleteBtn = document.querySelector("");

    deleteBtn.addEventListener("click", (btn)=>{
        btn.forEach((button)=>{
            const btn = button.getAtrribute("data-id");
            const removeItem = btn.closest("")
        })
    })
}

