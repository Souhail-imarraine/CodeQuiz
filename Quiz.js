let questionElement = document.querySelector('.QuizJson');
let nextButton = document.querySelector('.btn_next');
let answercontainer = document.querySelector('.answor_container');
const true_answore = document.getElementById("explication");
let currentQuestionIndex = 0;

let score = 0;

let dataQuizeJs = JSON.parse(localStorage.getItem("quizData")) || [];



function updateQuestion() {
    answercontainer.innerHTML = "";
    if (currentQuestionIndex < dataQuizeJs.length) {
        questionElement.textContent = dataQuizeJs[currentQuestionIndex].question;
        let options = dataQuizeJs[currentQuestionIndex].options;
        let opLength = dataQuizeJs[currentQuestionIndex].options.length;

        for (var i = 0; i < opLength; i++) {
            if (dataQuizeJs[currentQuestionIndex].type === "text") {
                var inp = document.createElement("input");
                answercontainer.style.gridTemplateColumns = "repeat(1, 1fr)";
                inp.classList.add("input_ansower");
                inp.type = "text";
                inp.placeholder = "Answer Here";
                answercontainer.appendChild(inp);

                var correctAnswer = options[0];  
                
                inp.addEventListener("change", () => {
                    var valueInputQuiz = inp.value.trim();
                    
                    if (valueInputQuiz === correctAnswer ) {     
                        score++;
                        inp.disabled = true;
                        inp.style.backgroundColor = "lightgreen"; 
                        localStorage.setItem("score", score);
                    } else {
                        inp.style.backgroundColor = "red"; 
            
                    }
                    count();
                });

            } else {
                answercontainer.style.gridTemplateColumns = "repeat(2, 1fr)";
                var btn = document.createElement("button");
                btn.className = "answor";
                btn.addEventListener("click", handleAnswerClick);
                answercontainer.appendChild(btn);
            }
        }
        
        let answerButtons = document.querySelectorAll('.answor');
        answerButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
            button.disabled = false; 
            button.style.backgroundColor = ''; 
        });

        answerButtons.forEach((button, index) => {
            if (options[index]) {
                button.textContent = options[index].text;
            }
        });
    } else {
        document.querySelector(".modal-container").style.display = "flex";
        // document.querySelector(".container_quizes").innerHTML = "";
        document.querySelector(".container_quizes").style.minHeight = "710px";
    }
}

// ****************************************



function handleAnswerClick(event) {
    if(event === null){
        document.querySelector(".modal-container").style.display = "flex";
        // document.querySelector(".container_quizes").innerHTML = "";
        document.querySelector(".container_quizes").style.minHeight = "710px";
    } else {
    
    let answerButtons = document.querySelectorAll('.answor');
    let selectedButton = event.target;
    let selectedOptionText = selectedButton.textContent;
    let correctOption = dataQuizeJs[currentQuestionIndex].options.find(option => option.correct);

    let containerColorScore = document.querySelector('.porsontage_color');

    let totalQuestions = dataQuizeJs.length;
    let progressPerCorrectAnswer = 100 / totalQuestions;


    answerButtons.forEach((button) => {
        button.disabled = true;
    });
    
    if (selectedOptionText === correctOption.text) {
        score++;
        localStorage.setItem("score", score);
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        if (dataQuizeJs[currentQuestionIndex].type === "vrai/faux") {
            true_answore.textContent = dataQuizeJs[currentQuestionIndex].explication;
            true_answore.style.textAlign = "center"
        }else {
            true_answore.textContent = ""
        }


        answerButtons.forEach(button => {
            if (button.textContent === correctOption.text) {
                button.classList.add('correct');
            }
        });
    }

    let progressWidth = score * progressPerCorrectAnswer;
    containerColorScore.style.width = progressWidth + "%";
    count();
    }

}
updateQuestion();


// nextQuize btn
function nextQuize(){
    nextButton.addEventListener('click', function () {
        true_answore.textContent = ""
        currentQuestionIndex++;
        updateQuestion();
    });
}
nextQuize()




// score 
function count() {
    document.getElementById('count').textContent = `Score: ${score}/${dataQuizeJs.length}`;
}
count();


// timing 30s
let tempTime = 0;

function timing() {
    let seconds = 60;  
    let timingElement = document.querySelector('.timing');
   
    let deley = setInterval(() => {
        if (seconds >= 0) {
            timingElement.innerHTML = `${Math.floor(seconds / 60)}min : ${seconds % 60}s`;
            seconds--; 
            tempTime++;
        }

        if (seconds < 0) {
            clearInterval(deley);
            timingElement.innerHTML = "Time's up!";
            handleAnswerClick(null);
            nextQuize();
            tempTotalQuize(); 
        }
    }, 1000);
}

timing();

// ******************************* score *****************************
let myscore = localStorage.getItem("score");

function scoreQuizes() {
    let nomber_bonne_reponse = document.querySelector(".nomber_bonne_reponse"); 
    nomber_bonne_reponse.innerHTML = `${myscore}/${dataQuizeJs.length}`;
    window.localStorage.setItem("nomber_bonne_reponse", JSON.stringify(nomber_bonne_reponse));
}
scoreQuizes();

//  Pourcentage
let pourcentage = document.querySelector(".pourcentage"); 
function pourcentageQuize() {
    let lenghtQuizes = dataQuizeJs.length; 
    pourcentage.innerHTML = (myscore / lenghtQuizes) * 100 + "%";
    window.localStorage.setItem("pourcentage", pourcentage.innerHTML);
}
pourcentageQuize();



//  Total Time
function tempTotalQuize() {
    const TempsTotal = document.querySelector(".TempsTotal");
    TempsTotal.textContent = `Total Time: ${Math.floor(tempTime / 60)}min : ${tempTime % 60}s`;
}


// ********************************************************************



const playAgain = document.getElementById("play_again");

playAgain.addEventListener("click", () => {
    document.querySelector(".modal-container").style.display = "none";
    
    score = 0;
    currentQuestionIndex = 0;
    tempTime = 0 ;

    localStorage.setItem("score", score);

    true_answore.textContent = "";
    
    let dataQuizeJs = JSON.parse(localStorage.getItem("quizData")) || [];
    
    if (dataQuizeJs.length === 0) {
        alert("No quiz data available. Please make sure quiz data is stored.");
        return;
    }

    count();
    updateQuestion();
    pourcentageQuize();
    tempTotalQuize()
    timing();
});


const back_btn = document.getElementById("back_btn");

back_btn.addEventListener("click", ()=> {
    window.location.href = "index.html";
});

