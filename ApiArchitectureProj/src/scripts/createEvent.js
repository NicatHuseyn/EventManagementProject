// import { getAllData, addNewData, editDataByIdPatch, deleteDataById, getDataById } from "../services/http-services/httpClientService.js";
import { endpoints } from "../constants/url.js";
import { addNewData, getAllData, getDataById ,editDataByIdPatch,deleteDataById} from "../services/http-services/httpClientService.js";

const tbody = document.querySelector("#eventTableBody");
const formContainer = document.querySelector(".formContainer");
const addEventBtn = document.querySelector("#addEventBtn");
const formTitle = document.querySelector("#formTitle");
const eventForm = document.querySelector("#eventForm");

// inputlar
const eventName = document.querySelector("#eventName");
const eventOrganizer = document.querySelector("#eventOrganizer");
const eventDescription = document.querySelector("#eventDescription");
const ticketsAvailable = document.querySelector("#ticketsAvailable");
const eventCategory = document.querySelector("#eventCategory");
const eventPrice = document.querySelector("#eventPrice");
const ageRestriction = document.querySelector("#ageRestriction");
const posterURL = document.querySelector("#posterURL");
const eventDuration = document.querySelector("#eventDuration");
const soldTickets = document.querySelector("#soldTickets");

async function getData() {
    const res = await getAllData(endpoints.events);
    const events = res.data;
    tbody.innerHTML = "";
    events.forEach((event) => {
        tbody.innerHTML += `
            <tr>
                <td>${event.id}</td>
                <td>${event.name}</td>
                <td>${event.dateTime}</td>
                <td>${event.organizer}</td>
                <td>${event.description}</td>
                <td>${event.ticketsAvailable}</td>
                <td>${event.category}</td>
                <td>${event.price}</td>
                <td>${event.ageRestriction}</td>
                <td>${event.duration}</td>
                <td>${event.soldTickets}</td>
                <td>
                    <button class="btn btn-outline btn-warning edit" data-id="${event.id}">Edit</button>
                    <button class="btn btn-outline btn-danger delete" data-id="${event.id}">Delete</button>
                </td>
            </tr>
        `;
    });

    // Edit button funksionalliqi
    document.querySelectorAll(".edit").forEach(async (btn) => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            formContainer.classList.add("d-block");
            formTitle.textContent = "Edit Event";

            try {
                const data = await getDataById(endpoints.events,id);
                console.log(data);
                
                const event = data.data;

               
                eventName.value = event.name;
                eventOrganizer.value = event.organizer;
                eventDescription.value = event.description;
                ticketsAvailable.value = event.ticketsAvailable;
                eventCategory.value = event.category;
                eventPrice.value = event.price;
                ageRestriction.value = event.ageRestriction;
                posterURL.value = event.posterURL;
                eventDuration.value = event.duration;
                soldTickets.value = event.soldTickets;
            } catch (error) {
                console.error("Error fetching event data:", error);
            }

            eventForm.onsubmit = async (e) => {
                e.preventDefault();

                const updatedEvent = {
                    name: eventName.value,
                    organizer: eventOrganizer.value,
                    description: eventDescription.value,
                    ticketsAvailable: ticketsAvailable.value,
                    category: eventCategory.value,
                    price: eventPrice.value,
                    ageRestriction: ageRestriction.value,
                    posterURL: posterURL.value,
                    duration: eventDuration.value,
                    soldTickets: soldTickets.value,
                };

                try {
                    const result = await editDataByIdPatch(endpoints.events, id, updatedEvent);
                    console.log("Event updated:", result);
                    formContainer.classList.remove("d-block");
                    getData(); 
                } catch (error) {
                    console.error("Error updating event:", error);
                }
            };
        });
    });

    document.querySelectorAll(".delete").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            try {
                console.log(btn.closest("tr"))
                
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
                        const res = await deleteDataById(endpoints.events, id);
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        }
                      });
                
            } catch (error) {
                console.error("Error deleting event:", error);
            }
        });
    });
}

addEventBtn.addEventListener("click", () => {
    formContainer.classList.add("d-block");
    formTitle.textContent = "Add Event";
    eventForm.reset();

    eventForm.onsubmit = async (e) => {
        e.preventDefault();

        const newEvent = {
            name: eventName.value,
            dateTime : new Date().toISOString(),
            organizer: eventOrganizer.value,
            description: eventDescription.value,
            ticketsAvailable: ticketsAvailable.value,
            category: eventCategory.value,
            price: eventPrice.value,
            ageRestriction: ageRestriction.value,
            posterURL: posterURL.value,
            duration: eventDuration.value,
            soldTickets: soldTickets.value,
        };

        try {
            const result = await addNewData(endpoints.events, newEvent);
            console.log("Event added:", result);
            formContainer.classList.remove("d-block");
            getData(); 
        } catch (error) {
            console.error("Error adding event:", error);
        }
    };
});

getData();