import { get } from "jquery"
import { deleteDataById, getAllData } from "../../services/api/api.js"

const tBody = document.querySelector("tbody")

let ticketsArr = []

async function getData() {
    const res = await getAllData("tickets")
    ticketsArr = res.data
    return ticketsArr
}

async function drawTable() {
    tBody.innerHTML = "";
    return getData().then(() => {
        ticketsArr.forEach((ticket) => {
            tBody.innerHTML += `
            <td>${ticket.id}</td>
            <td>${ticket.userId}</td>
            <td>${ticket.eventId}</td>
            <td>${ticket.quantity}</td>
            <td>${ticket.price}</td>
            <td>${ticket.purchaseDate}</td>
            <td>${ticket.ticketCode}</td>
            <td>
                <button class="btn btn-outline btn-warning edit" data-id="${ticket.id}">Edit</button>
                    <button class="btn btn-outline btn-danger delete" data-id="${ticket.id}">Delete</button>
            </td>
            `
        })
        const allDeleteBtns = document.querySelectorAll(".delete")
        const allEditBtns = document.querySelectorAll(".edit")

        allDeleteBtns.forEach((btn) => {
            btn.addEventListener("click",(e) => {
                e.preventDefault()
                const id = btn.getAttribute("data-id")
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                        await deleteDataById("tickets",id)
                        btn.closest("tr").remove
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
            })
        })
    })


}

drawTable()
