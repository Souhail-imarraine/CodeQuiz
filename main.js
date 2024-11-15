const quizInfo = [
  {
    id : 1,
    level: "Facile",
    category: "it",
    description: "Test your knowledge on a variety of topics...",
    duration: "5min",
    quizTitle: "Titre de quize",
  },
  {
    id : 2,
    level: "Facile",
    category: "General",
    description: "Test your knowledge on a variety of topics...",
    duration: "5min",
    quizTitle: "Titre de quize",
  },
  {
    id : 3,
    level: "Facile",
    category: "culture",
    description: "Test your knowledge on a variety of topics...",
    duration: "5min",
    quizTitle: "Titre de quize",
  }
];

localStorage.setItem("quizInfo", JSON.stringify(quizInfo));





const iconDark = document.querySelector("#toggleDark");
const body = document.querySelector("body");
const sunIcon = document.querySelector(".fa-sun");

var quizdata;
var startQuiz = document.querySelectorAll(".btn_star");
startQuiz.forEach((userChoice) => {
  userChoice.addEventListener("click", () => {
    let category = userChoice.getAttribute("data-categorie");
    quizdata = data[category];
    console.log(quizdata);

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

//  click card

const btnStar = document.querySelectorAll(".btn_star");
btnStar.forEach((btn) => {
  btn.addEventListener("click", () => {
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



