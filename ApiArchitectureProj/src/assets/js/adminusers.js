import { get } from "jquery"
import { getAllData } from "../../services/api/api.js"

const tbody = document.querySelector("tbody")
let usersArr = []

async function getdata() {
    const res = await getAllData()
    usersArr = res.data
}

function drawTable() {
    getdata().then(() => usersArr.forEach(user => {
        console.log(user);
        
        tbody.innerHTML = "";
        tbody.innerHTML += `
                     <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.balance}</td>
                    <td>${user.favorites[0]}... <button>Details</button></td>
                    <td>${user.accountCreationDate}</td>
                    <td>${user.totalSpentMoney}</td>
        `     

    } ))
}

drawTable()
