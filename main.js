


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



// filtrage 

function filterage() {
    const filterId = document.getElementById("filterId").value; 
    const quizes = document.querySelectorAll(".quizes"); 

    quizes.forEach((quiz) => {
        if(filterId === "choix" || quiz.getAttribute("data-level") === filterId) {
            quiz.style.display = ""
        }else {
            quiz.style.display = "none"
        }
    })
    
}


//  click card 


const btnStar = document.querySelectorAll(".btn_star");
btnStar.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        window.location.href = "/Quiz.html";
        btn.classList.add("active");
    });
});


// fonction check Niveau de difficulté :
function getAllNiveaux() {
    let niveaux = [];
    for (let i = 0; i <= data.questions.length; i++) {
      let niveau = data.questions[i].niveau;
      if (niveaux.indexOf(niveau) === -1) {
        niveaux.push(niveau);
      }
    }
    return niveaux;
}



// let optionList = document.querySelector('answor') ;
// const btnNext = document.querySelector("btn_next");
// btnNext.onclick = () => {

// }

// function showQuestion(index) {
//     const questionText = document.querySelector('QuizJson');
//     questionText.textContent = `${data.questions[index].question}`;
//     let optionTag = ` 
//     <div class="answor one">${data.questions[index].options[0]}</div>
//     <div class="answor two">${data.questions[index].options[1]}</div>
//     <div class="answor three">${data.questions[index].options[2]}</div>
//     <div class="answor four">${data.questions[index].options[3]}</div>
// `;
// optionList.innerHTML = optionTag;
// }


