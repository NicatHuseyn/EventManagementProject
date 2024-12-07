import { getAllData,getDataById,deleteDataById,addNewData,editDataById } from "../../services/api/api.js";
import { endpoints,BASE_URL } from "../../constants/url.js";

const tbody = document.querySelector("tbody")

console.log(BASE_URL);
console.log(endpoints.events);


let data = []

async function getData() {
    const res = await getAllData(endpoints.events);
    console.log(res.data);
    
}

setTimeout(() => {
    getData()
}, 1000);

