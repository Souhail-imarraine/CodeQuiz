
const iconDark = document.querySelector("#toggleDark");
const body = document.querySelector("body");
const sunIcon = document.querySelector(".fa-sun");

var quizdata;
var startQuiz = document.querySelectorAll(".btn_star");
startQuiz.forEach((userChoice) => {
  userChoice.addEventListener("click", () => {
    let category = userChoice.getAttribute("data-categorie");
    quizdata = data[category];
    localStorage.setItem("quizData", JSON.stringify(quizdata));
  });
});

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
      localStorage.setItem("mode", "light");
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
    if (filterId === "choix" || quiz.getAttribute("data-level") === filterId) {
      quiz.style.display = "";
    } else {
      quiz.style.display = "none";
    }
  });
}



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

const card_quiz = document.querySelectorAll(".card_quiz");
const description = document.querySelector(".description");
if(card_quiz) {
  card_quiz.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.color = "black";
      card.style.backgroundColor = "#f0f0f0";
      description.style.color = "black";
    });
  
    card.addEventListener("mouseout", () => {
      card.style.color = "#f0f0f0";
      description.style.color = "white";
    });
  });
}



//  add quizes in my dashboard

const gameContauner = document.querySelector(".container-game_one");
const MyQuizesDash = JSON.parse(localStorage.getItem("quizInfo")) || [];

MyQuizesDash.forEach((quiz)=> {
  gameContauner.innerHTML += `
                    <div class="card_quiz" data-level="Facile" > 
                        <button class="btn_star" data-categorie="${quiz.category}">play now</button>
                        <div>
                            <p class="description">est your knowledge on a variety of topics with this introductory quiz! Perfect for beginners, this quiz covers general knowledge questions that will challenge your understanding of history, science, culture, and more. Dive in to see how much you know and learn new facts along the way!</p>
                        </div>
                        <div style="display: flex; width: 100%; justify-content: space-around; align-items: center;">
                            <p class="class">${quiz.duration}min</p>
                            <i class="fa-solid fa-hourglass-start" style="color: #ffe600; font-size: xx-large;"></i>                        
                        </div>
                        <div class="Niveau_difficulte">
                            <h1 class="titre_quize">${quiz.quizTitle}</h1>
                        </div>
                    </div>
    `
})

//  click card

const btnStar = document.querySelectorAll(".btn_star");
btnStar.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "/Quiz.html";
    btn.classList.add("active");
  });
});
