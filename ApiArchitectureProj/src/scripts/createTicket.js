import { endpoints } from "../constants/url.js";
import { addNewData, getAllData, getDataById, editDataByIdPatch, deleteDataById } from "../services/http-services/httpClientService.js";

let ticketsArr = [];

const tbody = document.querySelector(".tbody");
const editTicketForm = document.getElementById("editTicketForm");
const editTicketSection = document.getElementById("EditTicketForm");
const cancelEditBtn = document.getElementById("cancelEditBtn");

// Function to fetch all tickets from the API
async function getdata() {
    try {
        const res = await getAllData(endpoints.tickets);
        ticketsArr = res.data;
        displayTickets();
    } catch (error) {
        console.error("Error fetching ticket data:", error);
    }
}

// Function to display tickets in the table
function displayTickets() {
    tbody.innerHTML = ""; // Clear table before populating

    ticketsArr.forEach((ticket) => {
        tbody.innerHTML += `
            <tr>
                <td>${ticket.id}</td>
                <td>${ticket.userId}</td>
                <td>${ticket.eventId}</td>
                <td>${ticket.quantity}</td>
                <td>${ticket.price}</td>
                <td>${ticket.purchaseDate}</td>
                <td>${ticket.ticketCode}</td>
                <td>      
                    <button class="btn btn-outline btn-danger delete" data-id="${ticket.id}">Delete</button>
                    <button class="btn btn-outline btn-warning edit" data-id="${ticket.id}">Edit</button>
                </td>
            </tr>
        `;
    });

    // Add event listeners to delete buttons
    const allDeleteBtns = document.querySelectorAll(".delete");
    allDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await deleteDataById(endpoints.tickets, id);
                    if (res.status === 201) {
                        btn.closest("tr").remove();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your ticket has been deleted.",
                            icon: "success",
                        });
                    }
                }
            });
        });
    });

    // Add event listeners to edit buttons
    const allEditBtns = document.querySelectorAll(".edit");
    allEditBtns.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const ticketId = btn.getAttribute("data-id");
            console.log("Clicked edit button for ticket ID:", ticketId); // Log ticketId to check
            await editTicket(ticketId);
        });
    });
}

async function editTicket(ticketId) {
    console.log("Editing ticket with ID:", ticketId); // Check ticketId

    if (!ticketId) {
        console.error("No ticket ID provided");
        return; // Exit early if ticketId is undefined or invalid
    }

    try {
        // Fetch the ticket data using the provided ticketId
        const ticket = await getDataById(ticketId);

        if (!ticket || !ticket.data) {
            console.error("Ticket data is not available:", ticket);
            return; // Exit if no valid ticket data
        }

        // Populate the form with ticket data
        document.getElementById("editUserId").value = ticket.data.userId;
        document.getElementById("editEventId").value = ticket.data.eventId;
        document.getElementById("editQuantity").value = ticket.data.quantity;
        document.getElementById("editPrice").value = ticket.data.price;
        document.getElementById("editPurchaseDate").value = ticket.data.purchaseDate;
        document.getElementById("editTicketCode").value = ticket.data.ticketCode;

        // Show the edit form section
        editTicketSection.style.display = "block";
        // Hide table section
        document.getElementById("TicketTable").style.display = "none";

        // Submit form to save changes
        editTicketForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const updatedTicket = {
                userId: document.getElementById("editUserId").value,
                eventId: document.getElementById("editEventId").value,
                quantity: document.getElementById("editQuantity").value,
                price: document.getElementById("editPrice").value,
                purchaseDate: document.getElementById("editPurchaseDate").value,
                ticketCode: document.getElementById("editTicketCode").value,
            };

            const res = await editDataByIdPatch(endpoints.tickets, ticketId, updatedTicket);
            if (res.status === 200) {
                Swal.fire({
                    title: "Updated!",
                    text: "Ticket details have been updated.",
                    icon: "success",
                });
                // Hide the edit form and show the table again
                editTicketSection.style.display = "none";
                document.getElementById("TicketTable").style.display = "block";
                getdata(); // Refresh the ticket list
            }
        });
    } catch (error) {
        console.error("Error fetching ticket data for editing:", error);
    }
}

// Cancel editing and go back to the ticket table
cancelEditBtn.addEventListener("click", () => {
    editTicketSection.style.display = "none";
    document.getElementById("TicketTable").style.display = "block";
});

// Initial data fetch
getdata();
