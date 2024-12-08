import { Event } from "../../classes/event-classes/event.js"
import { BASE_URL, endpoints } from "../../constants/url.js";
import { createData } from "../http-services/httpClientService.js";

export const createEvent =(name,venueName,venueAddress,venueCapacity,organizer,description,ticketsAvailable,category,price,ageRestriction,posterURL,duration,ticketCount,soldTickets)=>{
    const event = new Event(name,venueName,venueAddress,venueCapacity,organizer,description,ticketsAvailable,category,price,ageRestriction,posterURL,duration,ticketCount,soldTickets);

    createData(`${BASE_URL}/${endpoints.events}`,event);

}