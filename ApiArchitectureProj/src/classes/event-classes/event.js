import { nanoid } from "nanoid";

export class Event {
    constructor(name,venueName,venueAddress,venueCapacity,organizer,description,ticketsAvailable,category,price,ageRestriction,posterURL,duration,ticketCount,soldTickets) {
        this.id = nanoid()
        this.name = name
        this.dateTime = new Date().toISOString()
        this.venueName = venueName
        this.venueAddress = venueAddress
        this.venueCapacity = venueCapacity
        this.organizer = organizer
        this.description = description
        this.ticketsAvailable = ticketsAvailable
        this.category = category
        this.price = price
        this.ageRestriction = ageRestriction
        this.posterURL = posterURL
        this.duration = duration
        this.ticketCount = ticketCount
        this.soldTickets = soldTickets
    }
}