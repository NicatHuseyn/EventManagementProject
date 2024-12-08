
import { endpoints } from "../constants/url";
import { getAllData } from "../services/http-services/httpClientService";
import { createUser } from "../services/user-services/createUserService";

// document.getElementById("signup-toggle").addEventListener("click", function() {
//     document.getElementById("login-toggle").style.backgroundColor = "#fff";
//     document.getElementById("login-toggle").style.color = "#222";
//     document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
//     document.getElementById("signup-toggle").style.color = "#fff";
//     document.getElementById("login-form").style.display = "none";
//     document.getElementById("signup-form").style.display = "block";
// });

// document.getElementById("signup-toggle").addEventListener("click", function() {
//     document.getElementById("login-toggle").style.backgroundColor = "#fff";
//     document.getElementById("login-toggle").style.color = "#222";
//     document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
//     document.getElementById("signup-toggle").style.color = "#fff";
//     document.getElementById("login-form").style.display = "none";
//     document.getElementById("signup-form").style.display = "block";
// });


  


const signupForm = document.getElementById("signup");

signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    

    const fullnameElem = document.getElementById("fullname").value;
    const usernameELem = document.getElementById("username").value;
    const emailElem = document.getElementById("email").value;
    const balanceElem = document.getElementById("balance").value;
    const profileImageUrl = document.getElementById("profileImageUrl").value;
    const genderElem  =document.getElementById("gender").value;
    
    const passwordElem = document.getElementById("password").value;
    const passwordConfirmElem = document.getElementById("confirm_password").value;

    
    if (!fullnameElem || !usernameELem || !emailElem || !balanceElem || !profileImageUrl || !genderElem || !passwordElem || !passwordConfirmElem) {
        alert("Enter Your Data");
        return;
    }


    if (passwordElem !== passwordConfirmElem) {
        alert("your password is not same");
        return;
    }
    createUser(fullnameElem,usernameELem,emailElem,balanceElem,genderElem,profileImageUrl);
  
    signupForm.reset();


});

getAllData(endpoints.users).then(res=>{
    
    console.log(res.data);
})
