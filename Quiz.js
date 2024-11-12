let questionElement = document.querySelector('.QuizJson');
let nextButton = document.querySelector('.btn_next');
let answercontainer = document.querySelector('.answor_container');
let currentQuestionIndex = 0;

let score = 0;

function updateQuestion() {
    answercontainer.innerHTML = '';
    if (currentQuestionIndex < data.length) {
        questionElement.textContent = data[currentQuestionIndex].question;
        let options = data[currentQuestionIndex].options;
        let opLength = data[currentQuestionIndex].options.length;
        
        for (var i = 0; i < opLength; i++) {
            if (data[currentQuestionIndex].type === "text") {
                var inp = document.createElement("input");
                answercontainer.style.gridTemplateColumns = "repeat(1, 1fr)";
                inp.classList.add("input_ansower");
                inp.type = "text";
                inp.placeholder = "Answer Here";
                answercontainer.appendChild(inp);

                var correctAnswer = options[0];  
                
                // Input value
                inp.addEventListener("change", () => {
                    var valueInputQuiz = inp.value.trim();
                    
                    if (valueInputQuiz === correctAnswer ) {     
                        score++;
                        inp.disabled = true;
                        inp.style.backgroundColor = "lightgreen"; // Correct answer
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
        document.querySelector(".container_quizes").innerHTML = "";
        document.querySelector(".container_quizes").style.minHeight = "710px";
    }
}



function handleAnswerClick(event) {
    if(event === null){
        document.querySelector(".modal-container").style.display = "flex";
        document.querySelector(".container_quizes").innerHTML = "";
        document.querySelector(".container_quizes").style.minHeight = "710px";


    }else{

    let answerButtons = document.querySelectorAll('.answor');
    let selectedButton = event.target;
    let selectedOptionText = selectedButton.textContent;
    let correctOption = data[currentQuestionIndex].options.find(option => option.correct);

    let containerColorScore = document.querySelector('.porsontage_color');

    let totalQuestions = data.length;
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
        currentQuestionIndex++;
        updateQuestion();
    });
}
nextQuize()




// score 
function count() {
    document.getElementById('count').textContent = `Score: ${score}/${data.length}`;
}
count();


// timing 30s

function timing() {
    let seconds = 120;  
    let timingElement = document.querySelector('.timing');
   

    let deley = setInterval(() => {
        if (seconds >= 0) {
            timingElement.innerHTML = `${Math.floor(seconds / 60)}min : ${seconds % 60}s`;
            seconds--; 
        }

        if (seconds < 0) {
            clearInterval(deley);
            timingElement.innerHTML = "Time's up!";
            handleAnswerClick(null);
            nextQuize();
        }
    }, 1000);
}

timing();


// ******************************* score *****************************
let nomber_bonne_reponse = document.querySelector(".nomber_bonne_reponse"); 
let myscore =  localStorage.getItem("score");
function scoreQuizes() {
    nomber_bonne_reponse.innerHTML = `${myscore}/${data.length}`;
    window.localStorage.setItem("nomber_bonne_reponse", nomber_bonne_reponse);
}
scoreQuizes();

//  Pourcentage
let pourcentage = document.querySelector(".pourcentage"); 

 function pourcentageQuize() {
    let lenghtQuizes = data.length; 
    pourcentage.innerHTML = (myscore/lenghtQuizes)*100 + "%";
    window.localStorage.setItem("pourcentage", pourcentage.innerHTML);
 }
 pourcentageQuize();

//  tempt total

function tempTotalQuize(){
    const TempsTotal = document.querySelector(".TempsTotal");
    // TempTotal.innerHTML = 
    //**her i want to write my code*/
}

// ********************************************************************



