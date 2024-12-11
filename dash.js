let data = JSON.parse(localStorage.getItem("data")) || [];
console.log(data);

let myForm = document.forms.addQuizes;
let typeQuize = myForm.type_quize;
let container = document.querySelector(".container_type");

document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.forms.addQuizes;
    const typeQuize = myForm.type_quize;
    const container = document.querySelector(".container_type");

    typeQuize.addEventListener("change", () => {
        const valueType = typeQuize.value;
        container.innerHTML = "";

        if (valueType === "QCM") {
            container.innerHTML = `
        <div class="type_Qcm">
          <label for="points-per-question">Ajouter Réponses</label>
          <input type="text" name="Reponses" id="true" class="true-ansower" placeholder="True Answer">
          <input type="text" name="Reponses" id="false1" class="faux-ansowers" placeholder="False Answer 1">
          <input type="text" name="Reponses" id="false2" class="faux-ansowers" placeholder="False Answer 2">
          <input type="text" name="Reponses" id="false3" class="faux-ansowers" placeholder="False Answer 3">
        </div>`;
        } else if (valueType === "text") {
            container.innerHTML = `
        <div class="type_text">
          <label for="points-per-question">Ajouter Réponses</label>
          <input type="text" name="ReponsesText" class="true-ansower" placeholder="True Answer">
        </div>`;
        } else {
            container.innerHTML = `
        <div class="type_vraiFaux">
          <div>
            <select id="vraiFaux" name="vraiCorrect" class="vrais">
              <option value="vrai">Vrai</option>
              <option value="faux">Faux</option>
            </select>
          </div>
          <div>
            <select id="vraiFaux" name="FauxinCorrect" class="fauxs">
              <option value="vrai">Vrai</option>
              <option value="faux">Faux</option>
            </select>
          </div>
        </div>
        <div>
          <label for="explication">Explication</label>
          <input type="text" name="explication" class="true-ansower" placeholder="Explication">
        </div>`;
        }
    });

    document.querySelector("#btn_Enregistrer").addEventListener("click", function (e) {
        e.preventDefault();
        let datta = JSON.parse(localStorage.getItem("data")) || [];
        let difficultyLevel = myForm.difficultyLevel.value;
        let type_quize = myForm.type_quize.value;
        let Quize = myForm.Quize.value;
        let quizCategory = myForm.quizCategory.value;

        let dataa;

        switch (type_quize) {
            case "QCM":
                dataa = {
                    type: type_quize,
                    niveau: difficultyLevel,
                    question: Quize,
                    options: [
                        { text: document.querySelector("#false1").value, correct: false },
                        { text: document.querySelector("#false2").value, correct: false },
                        { text: document.querySelector("#true").value, correct: true },
                        { text: document.querySelector("#false3").value, correct: false }
                    ]
                };
                break;

            case "text":
                let ReponsesText = myForm.ReponsesText.value;
                dataa = {
                    type: type_quize,
                    niveau: difficultyLevel,
                    question: Quize,
                    options: [ReponsesText]
                };
                break;

            case "VraitFaux":
                let correctAnsowerTrue = myForm.vraiCorrect.value;
                let correctAnsowerFalse = myForm.FauxinCorrect.value;
                let explication = myForm.explication.value;
                dataa = {
                    type: type_quize,
                    niveau: difficultyLevel,
                    question: Quize,
                    options: [
                        { text: correctAnsowerTrue, correct: true },
                        { text: correctAnsowerFalse, correct: false }
                    ],
                    explication: explication
                };
                break;

            default:
                break;
        }

        datta[quizCategory].push(dataa);
        localStorage.setItem("data", JSON.stringify(datta));
        window.location.href = "Dashboard.html";
    });
});

function afficherQuize() {
    let quizeData = JSON.parse(localStorage.getItem("data")) || [];
    let containerTbody = document.querySelector("#container_tbody");

    containerTbody.innerHTML = "";

    for (let category in quizeData) {
        quizeData[category].forEach((quiz, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${quiz.question}</td>
                <td>${quiz.type}</td>
                <td>${quiz.niveau}</td>
                <td>${quiz.options.map(option => option.text).join(", ")}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editQuiz('${category}', ${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteQuiz('${category}', ${index})">Delete</button>
                </td>`;
            containerTbody.appendChild(row);
        });
    }
}

function editQuiz(category, index) {
    console.log(`Edit quiz in category: ${category}, index: ${index}`);
}

function deleteQuiz(category, index) {
    let quizeData = JSON.parse(localStorage.getItem("data")) || [];
    quizeData[category].splice(index, 1);
    localStorage.setItem("data", JSON.stringify(quizeData));
    afficherQuize();
}

document.addEventListener("DOMContentLoaded", () => {
    afficherQuize();
});
