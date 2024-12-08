import { User } from "../../classes/user-class/user.js";
import { registerUser } from "./registerUserService.js";


export const createUser = async (fullname, username, email,balance, gender,profilePictureURL)=>{
    const user = new User(fullname, username, email,balance, gender,profilePictureURL);
    await user.initializePassword(password);
    await registerUser(user);
}