import { User } from "../../classes/user-class/user.js";
import { registerUser } from "./registerUserService.js";


export const createUser = async (fullname, username,email,gender,password)=>{
    const user = new User(fullname,username,email,gender);
    await user.initializePassword(password);
    await registerUser(user);
}