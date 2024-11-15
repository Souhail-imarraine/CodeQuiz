document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.getElementById("container_tbody");

    const quizData = JSON.parse(localStorage.getItem("quizInfo")) || [];

    if (tbody) {
        quizData.forEach(quiz => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${quiz.id}</td>
                <td>${quiz.quizTitle}</td>
                <td>${quiz.level}</td>
                <td>${quiz.duration}</td>
                <td>${quiz.category}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editQuiz(${quiz.id})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteQuiz(${quiz.id})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    const registerForm = document.forms.addQuizes;
    const btnEnregistrer = document.getElementById("btn_Enregistrer");

    if (btnEnregistrer) {
        btnEnregistrer.addEventListener("click", () => {
            const title = registerForm.title.value;
            const quizCategory = registerForm.quizCategory.value;
            const difficultyLevel = registerForm.difficultyLevel.value;
            const timePerQuestion = registerForm.timePerQuestion.value;

            const idCount = quizData.length > 0 ? quizData[quizData.length - 1].id + 1 : 1;

            const newQuiz = {
                id: idCount,
                level: difficultyLevel,
                category: quizCategory,
                duration: timePerQuestion,
                quizTitle: title
            };

            quizData.push(newQuiz);

            localStorage.setItem("quizInfo", JSON.stringify(quizData));
            window.location.href = "/Dashboard.html"
        });
    }
});


function editQuiz(id) {
    const quizData = JSON.parse(localStorage.getItem("quizInfo")) || [];
    const quizToEdit = quizData.find(quiz => quiz.id === id);

    if (quizToEdit) {
      document.getElementById("quiz-title").value = quizToEdit.quizTitle;
      document.getElementById("quiz-category").value = quizToEdit.category;
      document.getElementById("difficulty-level").value = quizToEdit.level;
      document.getElementById("time-per-question").value = quizToEdit.duration;
      document.getElementById("points-per-question").value = quizToEdit.pointsPerQuestion;

      localStorage.setItem("currentQuizId", id);

      console.log("Editing quiz with ID:", id);
    }
  }

function deleteQuiz(id) {
    let quizInfo = JSON.parse(localStorage.getItem("quizInfo")) || [];

    quizInfo = quizInfo.filter(quiz => quiz.id !== id);
    localStorage.setItem("quizInfo", JSON.stringify(quizInfo));

    location.reload();

    console.log("Quiz deleted successfully!");
}


