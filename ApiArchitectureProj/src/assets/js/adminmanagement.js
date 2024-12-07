import { getAllData,getDataById,deleteDataById,addNewData,editDataById,editDataByIdPatch } from "../../services/api/api.js";
import { endpoints,BASE_URL } from "../../constants/url.js";
import { all } from "axios";

const tbody = document.querySelector("tbody")

console.log(BASE_URL);
console.log(endpoints.events);


let events = []

async function getData() {
    const res = await getAllData(endpoints.events);
    events = res.data
    
}

getData().then(() => {
    tbody.innerHTML = "";
    events.forEach((event) => {
        tbody.innerHTML += 
            `
                    <td>${event.id}</td>
                    <td>${event.name}</td>
                    <td>${event.dateTime}</td>
                    <td>${event.venueId}</td>
                    <td>${event.organizer}</td>
                    <td>${event.description}</td>
                    <td>${event.ticketsAvailable}</td>
                    <td>${event.category}</td>
                    <td>${event.price}</td>
                    <td>${event.ageRestriction}</td>
                    <td>${event.language}</td>
                    <td>${event.duration}</td>
                    <td>${event.soldTickets}</td>
                    <td>
                    <div class = "btns d-flex gap-1" >
                    <button class="btn btn-outline btn-warning edit" data-id = ${event.id}>Edit</button>
                    <button class="btn btn-outline btn-danger delete" data-id = ${event.id} >Delete</button>
                    </div>
                    </td>
            `
    
    })
    const allDeleteBtns = document.querySelectorAll(".delete");

    allDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            
            try {
                const res = await deleteDataById(endpoints.events, id);

                if (res.status === 200) {
                    btn.closest("tr").remove();
                }
            } catch (error) {
                console.error("Error deleting event:", error);
            }
        });
    });
    

    const allEditBtns = document.querySelectorAll(".edit")
    const eventForm = document.querySelector("#eventForm")
    console.log(eventForm);
    

    // inputlar 
    const eventName = document.querySelector("#eventName");
    const eventOrganizer = document.querySelector("#eventOrganizer");
    const eventDescription = document.querySelector("#eventDescription");
    const ticketsAvailable = document.querySelector("#ticketsAvailable");
    const eventCategory = document.querySelector("#eventCategory");
    const eventPrice = document.querySelector("#eventPrice");
    const ageRestriction = document.querySelector("#ageRestriction");
    const eventLanguage = document.querySelector("#eventLanguage");
    const eventDuration = document.querySelector("#eventDuration");
    const soldTickets = document.querySelector("#soldTickets");
    
    const formContainer = document.querySelector(".formContainer")

    allEditBtns.forEach((btn) => {
        btn.addEventListener("click",async () => {
            formContainer.classList.add("d-block")
            const id = btn.getAttribute("data-id");
            try {
                const data = await getDataById(endpoints.events, id);
                    console.log(data.data);
                    
                    eventName.value = data.data.name;
                eventOrganizer.value = data.data.organizer;
                eventDescription.value = data.data.description;
                ticketsAvailable.value = data.data.ticketsAvailable;
                eventCategory.value = data.data.category;
                eventPrice.value = data.data.price;
                ageRestriction.value = data.data.ageRestriction;
                eventLanguage.value = data.data.language;
                eventDuration.value = data.data.duration;
                soldTickets.value = data.data.soldTickets;
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
            if (eventForm) {
                eventForm.addEventListener("submit", async (e) => {
                    e.preventDefault(); 

                    const updatedEvent = {
                        name: eventName.value,
                        organizer: eventOrganizer.value,
                        description: eventDescription.value,
                        ticketsAvailable: ticketsAvailable.value,
                        category: eventCategory.value,
                        price: eventPrice.value,
                        ageRestriction: ageRestriction.value,
                        language: eventLanguage.value,
                        duration: eventDuration.value,
                        soldTickets: soldTickets.value,
                    };
            
                    try {

                        const result = await editDataByIdPatch(endpoints.events, id, updatedEvent);
                        console.log("Event updated:", result);

                        eventForm.reset(); 

                    } catch (error) {
                        console.error("Error updating event:", error);
                    }
                });
            } else {
                console.error("Event form not found!"); 
            }
            

        })
    })
    
    // allDeleteBtns.forEach((btn) => {
    //     this.addEventListener
    // })

    
})