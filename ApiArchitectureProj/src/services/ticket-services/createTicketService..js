import {  } from "nanoid";
import { Ticket } from "../../classes/ticket-classes/ticket";
import { createData } from "../http-services/httpClientService";
import { BASE_URL, endpoints } from "../../constants/url";

export const createTicket = (userId,eventId,quantity,price)=>{
    const ticket = new Ticket(userId,eventId,quantity,price);
    createData(`${BASE_URL}/${endpoints.tickets}`,ticket);
}