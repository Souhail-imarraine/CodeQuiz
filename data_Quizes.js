let data = {
  it: [
    {
      type: "QCM",
      niveau: "Facile",
      question: "Quel langage est principalement utilisé pour le développement d'applications web côté serveur ?",
      options: [
        { text: "HTML", correct: false },
        { text: "Python", correct: false },
        { text: "PHP", correct: true },
        { text: "Java", correct: false }
      ]
    },
    {
      type: "text",
      niveau: "Facile",
      question: "Quelle méthode permet de sélectionner un élément par son sélecteur CSS en JavaScript?",
      options: [
        "querySelector()"
      ]
    },
    {
      type: "vrai/faux",
      niveau: "Moyen",
      question: "La méthode `map()` en JavaScript modifie le tableau original.",
      options: [
        { text: "vrai", correct: false },
        { text: "faux", correct: true }
      ],
      explication: "La méthode `map()` retourne un nouveau tableau et ne modifie pas le tableau original."
    },
    {
      type: "QCM",
      niveau: "Facile",
      question: "Quel type de données permet de stocker plusieurs valeurs dans une seule variable en JavaScript ?",
      options: [
        { text: "String", correct: false },
        { text: "Array", correct: true },
        { text: "Object", correct: false },
        { text: "Integer", correct: false }
      ]
    },
    {
      type: "QCM",
      niveau: "Moyen",
      question: "Quel est l'opérateur d'addition en Python ?",
      options: [
        { text: "+", correct: true },
        { text: "-", correct: false },
        { text: "*", correct: false },
        { text: "/", correct: false }
      ]
    },
    {
      type: "vrai/faux",
      niveau: "Facile",
      question: "Le langage Python est principalement utilisé pour le développement web côté client.",
      options: [
        { text: "vrai", correct: false },
        { text: "faux", correct: true }
      ],
      explication: "Python est principalement utilisé pour le développement côté serveur, pas pour le développement côté client."
    },
    {
      type: "QCM",
      niveau: "Moyen",
      question: "Quel est le langage principalement utilisé pour l'intelligence artificielle ?",
      options: [
        { text: "JavaScript", correct: false },
        { text: "Python", correct: true },
        { text: "Ruby", correct: false },
        { text: "C#", correct: false }
      ]
    },
    {
      type: "text",
      niveau: "Facile",
      question: "Quelle méthode est utilisée pour afficher un message dans la console en JavaScript?",
      options: [
        "console.log()"
      ]
    }
  ],

  General: [
    {
      type: "QCM",
      niveau: "Facile",
      question: "Quel langage est utilisé pour créer des applications Android ?",
      options: [
        { text: "Python", correct: false },
        { text: "Kotlin", correct: true },
        { text: "JavaScript", correct: false },
        { text: "Swift", correct: false }
      ]
    },
    {
      type: "QCM",
      niveau: "Moyen",
      question: "Quel est l'opérateur de division en Python ?",
      options: [
        { text: "+", correct: false },
        { text: "-", correct: false },
        { text: "*", correct: false },
        { text: "/", correct: true }
      ]
    },
    {
      type: "vrai/faux",
      niveau: "Facile",
      question: "Python est un langage statiquement typé.",
      options: [
        { text: "vrai", correct: false },
        { text: "faux", correct: true }
      ],
      explication: "Python est un langage dynamiquement typé, donc les types de variables sont déterminés à l'exécution."
    },
    {
      type: "vrai/faux",
      niveau: "Moyen",
      question: "En Python, les variables sont typées dynamiquement.",
      options: [
        { text: "vrai", correct: true },
        { text: "faux", correct: false }
      ],
      explication: "Les variables en Python peuvent changer de type à tout moment, car Python est dynamiquement typé."
    },
    {
      type: "QCM",
      niveau: "Difficile",
      question: "Dans quel langage a été écrit le noyau Linux ?",
      options: [
        { text: "C", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false },
        { text: "Assembly", correct: false }
      ]
    },
    {
      type: "text",
      niveau: "Facile",
      question: "Que retourne `typeof []` en JavaScript?",
      options: [
        "array"
      ]
    },
    {
      type: "text",
      niveau: "Facile",
      question: "Quelle méthode est utilisée pour afficher un message dans la console en JavaScript?",
      options: [
        "console.log()"
      ]
    }
  ],

  culture: [
    {
      type: "QCM",
      niveau: "Facile",
      question: "Quel langage est principalement utilisé pour les scripts côté serveur ?",
      options: [
        { text: "Java", correct: false },
        { text: "Ruby", correct: false },
        { text: "PHP", correct: true },
        { text: "JavaScript", correct: false }
      ]
    },
    {
      type: "text",
      niveau: "Facile",
      question: "Quelle méthode est utilisée pour modifier le contenu HTML d'un élément en JavaScript ?",
      options: [
        "innerHTML"
      ]
    },
    {
      type: "vrai/faux",
      niveau: "Moyen",
      question: "La méthode `filter()` en JavaScript modifie le tableau original.",
      options: [
        { text: "vrai", correct: false },
        { text: "faux", correct: true }
      ],
      explication: "La méthode `filter()` retourne un nouveau tableau sans modifier le tableau d'origine."
    },
    {
      type: "QCM",
      niveau: "Facile",
      question: "Quel type de données permet de stocker plusieurs valeurs dans une seule variable en JavaScript ?",
      options: [
        { text: "String", correct: false },
        { text: "Array", correct: true },
        { text: "Object", correct: false },
        { text: "Integer", correct: false }
      ]
    },
    {
      type: "QCM",
      niveau: "Moyen",
      question: "Quel est l'opérateur d'addition en Python ?",
      options: [
        { text: "+", correct: true },
        { text: "-", correct: false },
        { text: "*", correct: false },
        { text: "/", correct: false }
      ]
    },
    {
      type: "vrai/faux",
      niveau: "Facile",
      question: "Le langage Python est principalement utilisé pour le développement web côté client.",
      options: [
        { text: "vrai", correct: false },
        { text: "faux", correct: true }
      ],
      explication: "Python est principalement utilisé côté serveur pour les applications backend, pas côté client."
    },
    {
      type: "QCM",
      niveau: "Moyen",
      question: "Quel est le langage principalement utilisé pour l'intelligence artificielle ?",
      options: [
        { text: "JavaScript", correct: false },
        { text: "Python", correct: true },
        { text: "Ruby", correct: false },
        { text: "C#", correct: false }
      ]
    },
    {
      type: "vrai/faux",
      niveau: "Moyen",
      question: "En Python, les variables sont typées dynamiquement.",
      options: [
        { text: "vrai", correct: true },
        { text: "faux", correct: false }
      ],
      explication: "Python utilise un typage dynamique, permettant aux variables de changer de type à l'exécution."
    },
    {
      type: "QCM",
      niveau: "Difficile",
      question: "Dans quel langage a été écrit le noyau Linux ?",
      options: [
        { text: "C", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false },
        { text: "Assembly", correct: false }
      ]
    },
    {
      type: "text",
      niveau: "Facile",
      question: "Que retourne `typeof []` en JavaScript?",
      options: [
        "array"
      ]
    },
    {
      type: "text",
      niveau: "Facile",
      question: "Quelle méthode est utilisée pour afficher un message dans la console en JavaScript?",
      options: [
        "console.log()"
      ]
    }
  ]
}





localStorage.setItem("data", JSON.stringify(data));