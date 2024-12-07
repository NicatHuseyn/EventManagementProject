let uuid = crypto.randomUUID();

export class User {
    constructor(fullname, username, email, gender) {
        this.id = uuid;
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.gender = gender;
    }

    async initializePassword(password) {
        this.password = await this.hashPassword(password);
    }

    async hashPassword(password) {
        return await globalHashPassword(password);
    }
}

const globalHashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-384", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};