//tableau des questions deja poser

startGame();
//Si pression sur space afficher game.html
function startGame() {
  var oldQuestions = [];
  oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);

  oxo.inputs.listenKeyOnce("space", function() {
    oxo.screens.loadScreen("game", function() {
      oxo.inputs.cancelKeyListener('space');
      //object joueur1 et 2
      var player1 = { name: "player 1", score: 0 };
      var player2 = { name: "player 2", score: 0 };

      //recuperation des elements de l'html
      var questionHTML = document.getElementById("question__question");
      var reply1 = document.getElementById("question__reply1");
      var reply2 = document.getElementById("question__reply2");
      var reply3 = document.getElementById("question__reply3");
      var reply4 = document.getElementById("question__reply4");
      var player1score = document.getElementById("player1__score");
      var player2score = document.getElementById("player2__score");

      //Base de données des Quéstions.
      var questions = [
        {
          question: "Qui est le père de Luck Skywalker ? ",
          reply1: "Dark Vador",
          reply2: "Jar Jar",
          reply3: "Obi-Wan",
          reply4: "Anakin Skywalker",
          goodReply: "Anakin Skywalker",
          className: "question--SwFather"
        },
        {
          question: "A quel moment un magicien arrive-t-il ?",
          reply1: "en retard",
          reply2: "en avance",
          reply3: "précisemment à l'heure prévue",
          reply4: "Obi-Wan Kenobi",
          goodReply: "précisemment à l'heure prévue",
          className: "question--wizard"
        },
        {
          question: "Que contient le baguette d'Harry Potter ?",
          reply1: "une plume de phéonix",
          reply2: "du sang de dragon",
          reply3: "une corne de licorne",
          reply4: "une griffe de griffon",
          goodReply: "une plume de phéonix",
          className: "question--Hp"
        },
        {
          question: "Quel est le nom d'origine de Mario ?",
          reply1: "Jumpman",
          reply2: "Plumberman",
          reply3: "Redman",
          reply4: "Luigi",
          goodReply: "Jumpman",
          className: "question-mario"
        },
        {
          question: "Que signifient les initiales de J.R.R. Tolkien ?",
          reply1: "Jeremiah Ruth Rogers",
          reply2: "James Reginald Ross",
          reply3: "John Ronald Reuel",
          reply4: "Jack Rory Reed",
          goodReply: "John Ronald Reuel",
          className: "question--tolkien"
        },
        {
          question: "Quel est le jeu le plus vendu de l'histoire ?",
          reply1: "Grand Theft Auto V",
          reply2: "Wii Sport",
          reply3: "Tetris",
          reply4: "Minecraft",
          goodReply: "Tetris",
          className: "question--tetris"
        },
        {
          question:
            "Dans quel Legend of Zelda apparaît pour la première fois Sheik ?",
          reply1: "Majora's Mask",
          reply2: "Ocarina of time",
          reply3: "Oracle of ages",
          reply4: "A link to Past",
          goodReply: "Ocarina of time",
          className: "question--zelda"
        },
        {
          question: "Quel est le nom de famille de Samus de Metroid ?",
          reply1: "Haron",
          reply2: "Cliff",
          reply3: "Aran",
          reply4: "Keith",
          goodReply: "Aran",
          className: "question--metroid"
        },
        {
          question:
            " Quel célèbre flic homme-robot a été adapté en comics par Frank Miller ?",
          reply1: "Terminator",
          reply2: "Robocop",
          reply3: "Bender",
          reply4: "Wall-E",
          goodReply: "Robocop",
          className: "question--robot"
        },
        {
          question: "A l'envers je parle, sages sont mes mots, qui suis-je ?",
          reply1: "Gandalf",
          reply2: "Obi-Wan Kenobi",
          reply3: "Yoda",
          reply4: "Albus Dumbledore",
          goodReply: "Yoda",
          className: "question-yoda"
        },
        {
          question:
            " Quelle divinité membre des avengers est devenue une femme ?",
          reply1: "Black Widow",
          reply2: "Iron man",
          reply3: "Hulk",
          reply4: "Thor",
          goodReply: "Thor",
          className: "question--godess"
        },
        {
          question: "Quel personnage de Walking Dead se bat avec des katanas ?",
          reply1: "Rick",
          reply2: "Glenn",
          reply3: "Michonne",
          reply4: "Carl",
          goodReply: "Michonne",
          className: "question--katanas"
        },
        {
          question: "Dans quel film Bill Murray extermine des ectoplasmes ?",
          reply1: "Un jour sans fin",
          reply2: "Ghostbusters - SOS Fantômes",
          reply3: "Fantômes en fête",
          reply4: "Space Jam",
          goodReply: "Ghostbusters - SOS Fantômes",
          className: "question--ghost"
        },
        {
          question:
            "A quelle vitesse doit aller une Dolorean pour retourner vers le futur ?",
          reply1: "2,21 gigowatts",
          reply2: "88 miles/heure",
          reply3: "88km/heure",
          reply4: "299 792 458 m/s",
          goodReply: "88 miles/heure",
          className: "question--dolorean"
        },
        {
          question: "Quelle est la boisson préférée du Dude ?",
          reply1: "White Russian",
          reply2: "Cosmopolitan",
          reply3: "Bloody Mary",
          reply4: "Irish Coffee",
          goodReply: "White Russian",
          className: "question--dude"
        },
        {
          question: " Qui est l'auteur du Necronomicon ?",
          reply1: " H.P. Lovecraft",
          reply2: "Robert E.Howard",
          reply3: "I.Ron Hubbard",
          reply4: "J.K. Rowling",
          goodReply: "H.P.Lovecraft",
          className: "question--lovecraft"
        },
        {
          question: "Dans quelle ville se passe la série Breaking Bad ?",
          reply1: "Baltimore",
          reply2: "Albuquerque",
          reply3: "Minneapolis",
          reply4: "Gotham city",
          goodReply: "Baltimore",
          className: "question--breaking"
        },
        {
          question:
            'Qui dit "de grands pouvoirs impliquent de grandes responsabilités"?',
          reply1: "Oncle Ben",
          reply2: "Alfred",
          reply3: "Superman",
          reply4: "Spiderman",
          goodReply: "Oncle Ben",
          className: "question--power"
        },
        {
          question:
            "Quelle couleur de sabre laser a été inventé pour Samuel L. Jackson dans Star Wars ?",
          reply1: "Orange",
          reply2: "Rose",
          reply3: "Violet",
          reply4: "Marron",
          goodReply: "Violet",
          className: "question--saber"
        },
        {
          question: "Quel est le célèbre couple de détective du paranormal ?",
          reply1: "Mulder et Scully",
          reply2: "Sherlock et Dr. Watson",
          reply3: "Rick Castle et Kate Beckett",
          reply4: "Minus et Cortex",
          goodReply: "Mulder et Scully",
          className: "question--paranormal"
        }
      ];

      player1score.innerHTML = 0;
      player2score.innerHTML = 0;

      /*----------------------------------function checkRand----------------------------------*/
      //function qui verifie si une question a deja ete poser

      console.log(oldQuestions.length);
      function checkRand() {
        if (oldQuestions.length == 10) {
          oldQuestions = [];
          oxo.screens.loadScreen("end", function() {
            oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
            var endScorePlayer1 = document.getElementById("endScore__player1");
            var endScorePlayer2 = document.getElementById("endScore__player2");
            var homeReturn = document.getElementById("home__return");

            var resultplayer1 = document.getElementById("result__player1");
            var resultplayer2 = document.getElementById("result__player2");

            var blackScreen = document.getElementById("blackScreen");

            if (player1["score"] > player2["score"]) {
              resultplayer1.innerHTML = "GEEKMASTER!";
              resultplayer2.innerHTML = "NOOB...";
            } else {
              resultplayer1.innerHTML = "NOOB...";
              resultplayer2.innerHTML = "GEEKMASTER!";
            }

            endScorePlayer1.innerHTML = player1["score"] + " pts";
            endScorePlayer2.innerHTML = player2["score"] + " pts";

            homeReturn.addEventListener("click", function() {
              oxo.screens.loadScreen("home", function() {});
              startGame();
            });
          });
        } else {
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
      }

      /*----------------------------------function changeEvent----------------------------------*/
      function changeEvent() {
        // Création d'un nombre aléatoire pour le choix de l'evenement.
        var randEvent = Math.floor(Math.random() * (10 - 1) + 1);
        // Si randEvent et superieur ou egale a 8 je lance un minijeux.
        if (randEvent >= 700) {
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
          console.log(oldQuestions.length);
          //affichage
          questionHTML.innerHTML = questions[randQuestion]["question"];
          reply1.innerHTML = questions[randQuestion]["reply1"];
          reply2.innerHTML = questions[randQuestion]["reply2"];
          reply3.innerHTML = questions[randQuestion]["reply3"];
          reply4.innerHTML = questions[randQuestion]["reply4"];
        }
        return randQuestion;
      }

      /*----------------------------------function checkReply----------------------------------*/
      //function qui verifier les reponse
      function checkReply(reply, goodReply, player, opponent) {
        //si la reponser et egale a la reponse attendu
        if (reply === goodReply) {
          //le joueur gagne 1 point
          player["score"] = player["score"] + 100;
          
          // je change d'evenement
          idQuestion = changeEvent(); 
          
          /*console.log(
            "score: joueur 1:",
            player1["score"],
            "joueur 2:",
            player2["score"]
          );*/
          
        } else {
          // si le jouueur se trompe sont l'autre joueur gagne 1 point
          opponent["score"] = opponent["score"] + 100;
          idQuestion = changeEvent();
          
          /*console.log(
            "score: joueur 1:",
            player1["score"],
            "joueur 2:",
            player2["score"]
          );*/
          
        }
        changeScore();
      }

      /*----------------------------------function changeScore----------------------------------*/
      function changeScore() {
        player1score.innerHTML = player1["score"] + " pts";
        player2score.innerHTML = player2["score"] + " pts";
      }

      //changement d'evenement
      var idQuestion = changeEvent();

      if ( oxo.screens.currentScreen === 'game' ) {

        function activateKey(){
          //si le joueur 1 clique sur a
        oxo.inputs.listenKey("a", function() {
          console.log("touche a");
          console.log(oxo.screens.currentScreen);
          // je verifie ca reponse
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply1"],
              questions[idQuestion]["goodReply"],
              player1,
              player2
            );
            
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });
        oxo.inputs.listenKey("z", function() {
          console.log("touche z");
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply2"],
              questions[idQuestion]["goodReply"],
              player1,
              player2
            );
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });
        oxo.inputs.listenKey("e", function() {
          console.log("touche e");
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply3"],
              questions[idQuestion]["goodReply"],
              player1,
              player2
            );
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });
        oxo.inputs.listenKey("r", function() {
          console.log("touche r");
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply4"],
              questions[idQuestion]["goodReply"],
              player1,
              player2
            );
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });

        oxo.inputs.listenKey("u", function() {
          console.log("touche u");
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply1"],
              questions[idQuestion]["goodReply"],
              player2,
              player1
            );
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });
        oxo.inputs.listenKey("i", function() {
          console.log("touche i");
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply2"],
              questions[idQuestion]["goodReply"],
              player2,
              player1
            );
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });
        oxo.inputs.listenKey("o", function() {
          console.log("touche o");
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply3"],
              questions[idQuestion]["goodReply"],
              player2,
              player1
            );
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });
        oxo.inputs.listenKey("p", function() {
          console.log("touche p");
          oxo.inputs.cancelKeysListeners(['a', 'z','e','r','u','i','o','p']);
          blackScreen.classList.toggle('is-changed');
          setTimeout(function() {
            checkReply(
              questions[idQuestion]["reply4"],
              questions[idQuestion]["goodReply"],
              player2,
              player1
            );
          }, 450);
          setTimeout(function(){activateKey();},1350);
        });
        }
        activateKey();
      }
    });
  });
}
