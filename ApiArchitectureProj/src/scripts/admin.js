

document.addEventListener("DOMContentLoaded",()=>{
    const token = localStorage.getItem('token');

    if (!token) {
        alert("You are not authorized to view this page.")
        window.location.href = "/register";
    }
});


const menu = document.querySelector(".menu");
        const sidebar = document.querySelector(".sidebar");
        const closeIcon = document.querySelector(".close");
        const navText = document.querySelector(".navText");

        menu.addEventListener("click", () => {
            sidebar.classList.add("active"); 
            closeIcon.classList.add("active"); 
            navText.style.marginLeft = "250px";  
        });

        closeIcon.addEventListener("click", () => {
            sidebar.classList.remove("active"); 
            closeIcon.classList.remove("active"); 
            navText.style.marginLeft = "0"; 
        });