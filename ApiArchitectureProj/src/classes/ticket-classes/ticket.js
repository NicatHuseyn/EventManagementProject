import { nanoid } from "nanoid";

const ticketCode = crypto.randomUUID();     

export class Ticket {
    constructor(userId,eventId,quantity,price) {
        this.id = nanoid()
        this.userId = userId
        this.eventId = eventId
        this.quantity = quantity
        this.price = price
        this.ticketCode = ticketCode
    }
}