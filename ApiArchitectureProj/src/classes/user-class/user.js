import { globalHashPassword } from "../../constants/globalPasswordHash.js";
// import { createTicket } from "../../services/ticket-se`rvices/createTicketService..js";
// import { Ticket } from "../ticket-classes/ticket.js";`

let uuid = crypto.randomUUID();

export class User {
    constructor(fullname, username, email,balance, gender,profilePictureURL) {
        this.id = uuid
        this.fullname = fullname
        this.username = username
        this.email = email
        this.balance = balance
        this.profilePictureURL = profilePictureURL
        this.gender = gender
        this.accountCreateDate = new Date().toISOString()
    }

    async initializePassword(password) {
        this.password = await this.hashPassword(password);
    }

    async hashPassword(password) {
        return await globalHashPassword(password);
    }

    // bornTicket(ticket = null){
    //     const userTickets = [];
    //     userTickets.push(ticket);
    //     return userTickets;
    // }
}
