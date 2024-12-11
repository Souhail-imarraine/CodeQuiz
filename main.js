let getData = JSON.parse(localStorage.getItem("data")) || []
// console.log(getData);

let containerCard = document.querySelector(".container-game_one");

// loop 3la l'object ;
for(let key in getData){
  containerCard.innerHTML += 
  `
                    <div class="card_quiz"> 
                        <button class="btn_star" data-categorie="${key}">play Now</button>
                        <div style="display: flex; width: 100%; justify-content: space-around; align-items: center;">
                            <p class="class">2min</p>
                            <i class="fa-solid fa-hourglass-start" style="color: #ffe600; font-size: xx-large;"></i>                        
                        </div>
                        <div class="Niveau_difficulte">
                            <h1 class="titre_quize">${key}</h1>
                        </div>
                    </div>
  `
}

const btnStar = document.querySelectorAll(".btn_star");
btnStar.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem("quizData", JSON.stringify(getData[btn.getAttribute("data-categorie")]));
    window.location.href = "./Quiz.html";
    btn.classList.add("active");
  });
});