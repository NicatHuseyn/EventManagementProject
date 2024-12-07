

document.addEventListener("DOMContentLoaded",()=>{
    const token = localStorage.getItem('token');

    if (!token) {
        alert("You are not authorized to view this page.")
        window.location.href = "/register";
    }
});