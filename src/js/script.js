//Si pression sur space afficher game.html
oxo.inputs.listenKeyOnce("space", function() {
  oxo.screens.loadScreen("game", function() {

    //object joueur1 et 2
    var player1 = { name: "player 1", score: 0 };
    var player2 = { name: "player 2", score: 0 };

    //recuperation des elements de l'html
    var questionHTML = document.getElementById("question__question");
    var reply1 = document.getElementById("question__reply1");
    var reply2 = document.getElementById("question__reply2");
    var reply3 = document.getElementById("question__reply3");
    var reply4 = document.getElementById("question__reply4");
    console.log(questionHTML);

    //Base de données des Quéstions.
    var questions = [
      {
        question: "Qui est le pére de Luck Skywalker",
        reply1: "Dark Vador",
        reply2: "Jar Jar",
        reply3: "Obi-Wan",
        reply4: "Anakin Skywalker",
        goodReply: "Anakin Skywalker",
        className: "question--SwFather"
      },
      {
        question: "A quel moment un magicien arrive?",
        reply1: "en retard",
        reply2: "en avance",
        reply3: "a l heure prevu",
        reply4: "obi-wan kenobi",
        goodReply: "a l heure prevu",
        className: ""
      },
      {
        question: "Que contient le baguette d Harry Potter",
        reply1: "une plume de pheonix",
        reply2: "du sang de dragon",
        reply3: "une corne de licorne",
        reply4: "une griffe de grinphon",
        goodReply: "une plume de pheonix",
        className: ""
      }
    ];

    //tableau des questions deja poser
    var oldQuestions = [];
    /*----------------------------------function----------------------------------*/
    //function qui verifie si une question a deja ete poser
    function checkRand() {
      do {
        //recupere un nombre aleatoire entre 0 et la longeur du tableau
        var randQuestion = Math.floor(
          Math.random() * (questions.length - 0) + 0
        );
        //si le nombre aleatoire generer se trouver pas dans le tableau
        if (oldQuestions.indexOf(randQuestion) == -1) {
          //je retourne le nombre aleatoire
          return randQuestion;
        } else {
          result = -1;
        }
      } while (result == -1);
    }

    console.log("rand", checkRand());

    function changeEvent() {
      // Création d'un nombre aléatoire pour le choix de l'evenement.
      var randEvent = Math.floor(Math.random() * (10 - 1) + 1);
      // Si randEvent et superieur ou egale a 8 je lance un minijeux.
      if (randEvent >= 7) {
        //affichage
        questionHTML.innerHTML = "MINI JEUX";
        reply1.innerHTML = "";
        reply2.innerHTML = "";
        reply3.innerHTML = "";
        reply4.innerHTML = "";

        //sinon je lance un question
      } else {
        // Création d'un nombre aléatoire pour le choix des question.
        randQuestion = checkRand();
        //je push le nombre aleatoire dans le talbeau des questions deja poser
        oldQuestions.push(randQuestion);
        //affichage
        questionHTML.innerHTML = questions[randQuestion]["question"];
        reply1.innerHTML = questions[randQuestion]["reply1"];
        reply2.innerHTML = questions[randQuestion]["reply2"];
        reply3.innerHTML = questions[randQuestion]["reply3"];
        reply4.innerHTML = questions[randQuestion]["reply4"];
      }
      return randQuestion;
    }
    //function qui verifier les reponse
    function checkReply(reply, goodReply, player, opponent) {
      //si la reponser et egale a la reponse attendu
      if (reply === goodReply) {
        //le joueur gagne 1 point
        player["score"] = player["score"] + 1;
        // je change d'evenement
        idQuestion = changeEvent();
        console.log(
          "score: joueur 1:",
          player1["score"],
          "joueur 2:",
          player2["score"]
        );
      } else {
        // si le jouueur se trompe sont l'autre joueur gagne 1 point
        opponent["score"] = opponent["score"] + 1;
        idQuestion = changeEvent();
        console.log(
          "score: joueur 1:",
          player1["score"],
          "joueur 2:",
          player2["score"]
        );
      }
    }
    
    //changement d'evenement
    var idQuestion = changeEvent();

    console.log("id question=", idQuestion);

    //si le joueur 1 clique sur a
    oxo.inputs.listenKey("a", function() {
      console.log("touche a");
      // je verifie ca reponse
      checkReply(
        questions[idQuestion]["reply1"],
        questions[idQuestion]["goodReply"],
        player1,
        player2
      );
    });
    oxo.inputs.listenKey("z", function() {
      console.log("touche z");
      checkReply(
        questions[idQuestion]["reply2"],
        questions[idQuestion]["goodReply"],
        player1,
        player2
      );
    });
    oxo.inputs.listenKey("e", function() {
      console.log("touche e");
      checkReply(
        questions[idQuestion]["reply3"],
        questions[idQuestion]["goodReply"],
        player1,
        player2
      );
    });
    oxo.inputs.listenKey("r", function() {
      console.log("touche r");
      checkReply(
        questions[idQuestion]["reply4"],
        questions[idQuestion]["goodReply"],
        player1,
        player2
      );
    });

    oxo.inputs.listenKey("u", function() {
      console.log("touche u");
      checkReply(
        questions[idQuestion]["reply1"],
        questions[idQuestion]["goodReply"],
        player2,
        player1
      );
    });
    oxo.inputs.listenKey("i", function() {
      console.log("touche i");
      checkReply(
        questions[idQuestion]["reply2"],
        questions[idQuestion]["goodReply"],
        player2,
        player1
      );
    });
    oxo.inputs.listenKey("o", function() {
      console.log("touche o");
      checkReply(
        questions[idQuestion]["reply3"],
        questions[idQuestion]["goodReply"],
        player2,
        player1
      );
    });
    oxo.inputs.listenKey("p", function() {
      console.log("touche p");
      checkReply(
        questions[idQuestion]["reply4"],
        questions[idQuestion]["goodReply"],
        player2,
        player1
      );
    });
    console.log(questions);
  });
});
