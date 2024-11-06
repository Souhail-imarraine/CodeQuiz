


const iconDark = document.querySelector("#toggleDark");
const body = document.querySelector("body");
const sunIcon = document.querySelector(".fa-sun");


function darkMode() {
    if (localStorage.getItem("mode") === "dark") {
        body.style.backgroundColor = "black";
        sunIcon.classList.remove("fa-sun");
        sunIcon.classList.add("fa-moon");
    } else {
        body.style.background = "white";
        sunIcon.classList.remove("fa-moon");
        sunIcon.classList.add("fa-sun");
    }

    iconDark.addEventListener("click", () => {

        if (sunIcon.classList.contains("fa-sun")) {

            localStorage.setItem("mode", "dark");
            sunIcon.classList.remove("fa-sun");
            sunIcon.classList.add("fa-moon");
            body.style.backgroundColor = "black";
        } else {

            localStorage.setItem("mode", "light")
            sunIcon.classList.remove("fa-moon");
            sunIcon.classList.add("fa-sun");
            body.style.backgroundColor = "white";
        }

    });
}
darkMode();


function scrolImages() {
    
}


// page home styling card 
const containerScrol = document.querySelector(".game_container")
const img = document.querySelectorAll(".img");
const btn_right = document.querySelector(".btn_right");
const btn_left = document.querySelector(".btn_left");

btn_right.addEventListener("click", (ele) => {
    containerScrol.scrollLeft;
});




