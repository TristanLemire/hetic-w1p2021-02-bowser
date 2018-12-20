function removeClass(question, tab) {
  tab.forEach(element => {
    question.classList.remove(element);
  });
}
oxo.screens.loadScreen("start", function() {
  oxo.inputs.cancelKeysListeners(["space", "s", "l"]);
  var bowserLogo = document.getElementById("bowser__logo");
  var heticLogo = document.getElementById("hetic__logo");
  var bowserSound = document.getElementById("bowserSound");
  bowserSound.play();
  setTimeout(function() {
    bowserLogo.classList.add("is-invisible");

    setTimeout(function() {
      var gameboySound = document.getElementById("gameboySound");
      gameboySound.play();
      heticLogo.classList.add("is-visible");
      setTimeout(function() {
        heticLogo.classList.remove("is-visible");
      }, 1000);
    }, 1200);
  }, 4500);
  setTimeout(function() {
    oxo.screens.loadScreen("home", function() {
      startGame();
    });
  }, 8000);
});

function startGame() {
  var buttonTuto = document.getElementById("button__tuto");
  buttonTuto.addEventListener("click", function() {
    var tutoSection = document.getElementById("tuto__section");
    tutoSection.classList.toggle("is-visible");
  });
  var oldQuestions = [];
  oxo.inputs.cancelKeysListeners([
    "a",
    "z",
    "e",
    "r",
    "u",
    "i",
    "o",
    "p",
    "s",
    "l"
  ]);
  oxo.inputs.listenKeyOnce("space", function() {
    var menuSound = document.getElementById("menuSound");
    menuSound.pause();
    var clickMusic = document.getElementById("clickSound");
    clickMusic.play();
    
    setTimeout(function() {
      oxo.screens.loadScreen("game", function() {
        var gameSound = document.getElementById("gameSound");
        gameSound.play();
        oxo.inputs.cancelKeysListeners(["space", "s", "l"]);
        var player1 = { name: "player 1", score: 0 };
        var player2 = { name: "player 2", score: 0 };

        var questionHTML = document.getElementById("question__question");
        var reply1 = document.getElementById("question__reply1");
        var reply2 = document.getElementById("question__reply2");
        var reply3 = document.getElementById("question__reply3");
        var reply4 = document.getElementById("question__reply4");
        var player1score = document.getElementById("player1__score");
        var player2score = document.getElementById("player2__score");
        var question = document.getElementById("question");
        var failSound = document.getElementById("failSound");
        var winSound = document.getElementById("winSound");
        var questionBloc = document.getElementById("question__bloc");
        var flash = document.getElementById("flash");
        var superman = document.getElementById("superman");
        var minigameBloc = document.getElementById("minigame__bloc");
        var blackScreen = document.getElementById("blackScreen");

        player1score.innerHTML = 0;
        player2score.innerHTML = 0;

        function checkRand() {
          if (oldQuestions.length == 11) {
            oldQuestions = [];

            setTimeout(function() {
              oxo.screens.loadScreen("end", function() {
                var endMusic = document.getElementById("endSound");

                endMusic.play();

                oxo.inputs.cancelKeysListeners(["a","z","e","r","u","i","o","p"]);

                var endScorePlayer1 = document.getElementById("endScore__player1");

                var endScorePlayer2 = document.getElementById("endScore__player2");

                var homeReturn = document.getElementById("home__return");

                var resultplayer1 = document.getElementById("result__player1");

                var resultplayer2 = document.getElementById("result__player2");

                if (player1["score"] > player2["score"]) {
                  resultplayer1.innerHTML = "GEEKMASTER!";
                  resultplayer1.classList.add("is-winner");
                  resultplayer2.innerHTML = "NOOB...";
                } else {
                  resultplayer1.innerHTML = "NOOB...";
                  resultplayer2.innerHTML = "GEEKMASTER!";
                  resultplayer2.classList.add("is-winner");
                }

                endScorePlayer1.innerHTML = player1["score"] + " pts";
                endScorePlayer2.innerHTML = player2["score"] + " pts";

                homeReturn.addEventListener("click", function() {
                  oxo.screens.loadScreen("home", function() {
                    startGame();
                  });
                });
              });
            }, 500);
          } else {
            do {
              var randQuestion = Math.floor(
                Math.random() * (questions.length - 0) + 0
              );

              if (oldQuestions.indexOf(randQuestion) == -1) {
                return randQuestion;
              } else {
                result = -1;
              }
            } while (result == -1);
          }
        }
        /** fonction qui permet de lancer des question ou le mini jeux aleatoirement*/
        function changeEvent() {
          /**  creation d'un nombre aléatoire*/
          var randEvent = Math.floor(Math.random() * (10 - 1) + 1);
          /** si ce nombre et inferieur ou egal a 8 je lance un minijeux */
          if (randEvent >= 8) {
            randQuestion = -1;
            /** je n'affiche pas les bloc des questions */
            questionBloc.style.display = "none";
            /** je retire les backgrounds des questions */
            var tabClass = ["add-comics","add-sf","add-videogame","add-fantasy","add-movie"];
            removeClass(question, tabClass);
            /** j'affiche le background du minijeux ainsi que le sprite de superman et flash*/
            question.classList.add("add-minigame");
            superman.style.display = "block";
            flash.style.display = "block";
            /** j'affiche les texte lier au minijeux */
            minigameBloc.style.display = "flex";
            /** si mon nombre aleatoire est inferieur a 8 je lance des questions  */
          } else {
            /** je n'affiche plus les sprites de superman et flash  ainsi que le texte lier au mini jeux*/
            superman.style.display = "none";
            flash.style.display = "none";
            minigameBloc.style.display = "none";
            /** j'affiche les bloc des question */
            questionBloc.style.display = "flex";
            /** je teste si j'ai posé tout les question et sinon je gener aleatoirement un nombre de 0 a la longeur 
             * du tableau de questions
             */
            randQuestion = checkRand();
            /** je sauvegarde le nombre aleatoire generer */
            oldQuestions.push(randQuestion);
            /** si la question est une question sur le theme des comics */
            if (questions[randQuestion]["className"] == "comics") {
              /** j'affiche le background comics et je retire les autre backgrounds */
              var tabClass1 = ["add-minigame","add-sf","add-videogame","add-fantasy","add-movie"];
              removeClass(question, tabClass1);
              question.classList.add("add-comics");
            } else if (questions[randQuestion]["className"] == "sf") {
              var tabClass2 = ["add-minigame","add-comics","add-videogame","add-fantasy","add-movie"];
              removeClass(question, tabClass2);
              question.classList.add("add-sf");
            } else if (questions[randQuestion]["className"] == "videogame") {
              var tabClass3 = ["add-minigame","add-comics","add-sf","add-fantasy","add-movie"];
              removeClass(question, tabClass3);
              question.classList.add("add-videogame");
            } else if (questions[randQuestion]["className"] == "fantasy") {
              var tabClass4 = ["add-minigame","add-comics","add-sf","add-videogame","add-movie"];
              removeClass(question, tabClass4);
              question.classList.add("add-fantasy");
            } else if (questions[randQuestion]["className"] == "movie") {
              var tabClass5 = ["add-minigame","add-comics","add-sf","add-videogame","add-fantasy"];
              removeClass(question, tabClass5);
              question.classList.add("add-movie");
            }
            /** j'affiche la question et les reponses assosier */
            questionHTML.innerHTML = questions[randQuestion]["question"];
            reply1.innerHTML = questions[randQuestion]["reply1"];
            reply2.innerHTML = questions[randQuestion]["reply2"];
            reply3.innerHTML = questions[randQuestion]["reply3"];
            reply4.innerHTML = questions[randQuestion]["reply4"];
          }
          /** je retourne le nombre aleatoire des questions pour le sauvegarder */
          return randQuestion;
        }

        function checkReply(reply, goodReply, player, opponent) {
          if (reply === goodReply) {
            winSound.play();
            player["score"] = player["score"] + 100;

            idQuestion = changeEvent();
          } else {
            opponent["score"] = opponent["score"] + 100;
            failSound.play();
            idQuestion = changeEvent();
          }
          changeScore();
        }

        function changeScore() {
          player1score.innerHTML = player1["score"] + " pts";
          player2score.innerHTML = player2["score"] + " pts";
        }

        function checkRun() {
          if (countPlayer1 == 10) {
            flash.style.left = 0;
            superman.style.left = 0;
            winSound.play();
            player1["score"] = player1["score"] + 100;

            idQuestion = changeEvent();
          } else {
            superman.style.left = 0;
            flash.style.left = 0;
            player2["score"] = player2["score"] + 100;
            winSound.play();
            idQuestion = changeEvent();
          }
          countPlayer1 = 0;
          countPlayer2 = 0;
          changeScore();
        }

        var idQuestion = changeEvent();
        var countPlayer1 = 0;
        var countPlayer2 = 0;
        var countMovePlayer1 = 0;
        var countMovePlayer2 = 0;

        function activateKey() {
          if (
            oxo.screens.currentScreen === "game" &&
            question.className != "question add-minigame"
          ) {
            oxo.inputs.listenKey("a", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply1"],
                  questions[idQuestion]["goodReply"],
                  player1,
                  player2
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });
            oxo.inputs.listenKey("z", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply2"],
                  questions[idQuestion]["goodReply"],
                  player1,
                  player2
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });
            oxo.inputs.listenKey("e", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply3"],
                  questions[idQuestion]["goodReply"],
                  player1,
                  player2
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });
            oxo.inputs.listenKey("r", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply4"],
                  questions[idQuestion]["goodReply"],
                  player1,
                  player2
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });

            oxo.inputs.listenKey("u", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply1"],
                  questions[idQuestion]["goodReply"],
                  player2,
                  player1
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });
            oxo.inputs.listenKey("i", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply2"],
                  questions[idQuestion]["goodReply"],
                  player2,
                  player1
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });
            oxo.inputs.listenKey("o", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply3"],
                  questions[idQuestion]["goodReply"],
                  player2,
                  player1
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });
            oxo.inputs.listenKey("p", function() {
              oxo.inputs.cancelKeysListeners([
                "a",
                "z",
                "e",
                "r",
                "u",
                "i",
                "o",
                "p"
              ]);
              blackScreen.classList.toggle("is-changed");
              setTimeout(function() {
                checkReply(
                  questions[idQuestion]["reply4"],
                  questions[idQuestion]["goodReply"],
                  player2,
                  player1
                );
              }, 450);
              setTimeout(function() {
                activateKey();
              }, 1350);
            });
          } else {
            oxo.inputs.listenKey("s", function() {
              countMovePlayer1 = 130 * (countPlayer1 + 1) + "px";

              flash.style.left = countMovePlayer1;

              countPlayer1 = countPlayer1 + 1;

              if (countPlayer1 == 10) {
                oxo.inputs.cancelKeysListeners(["s", "l"]);
                blackScreen.classList.toggle("is-changed");
                setTimeout(function() {
                  checkRun();
                }, 450);
                setTimeout(function() {
                  activateKey();
                }, 1350);
              }
            });
            oxo.inputs.listenKey("l", function() {
              countMovePlayer2 = 130 * (countPlayer2 + 1) + "px";

              superman.style.left = countMovePlayer2;

              countPlayer2 = countPlayer2 + 1;

              if (countPlayer2 == 10) {
                oxo.inputs.cancelKeysListeners(["s", "l"]);
                blackScreen.classList.toggle("is-changed");
                setTimeout(function() {
                  checkRun();
                }, 450);
                setTimeout(function() {
                  activateKey();
                }, 1350);
              }
            });
          }
        }
        activateKey();
      });
    }, 500);
  });
}

var questions = [
  {
    question: "Qui est le père de Luck Skywalker ? ",
    reply1: "Dark Vador",
    reply2: "Jar Jar",
    reply3: "Obi-Wan",
    reply4: "Anakin Skywalker",
    goodReply: "Anakin Skywalker",
    className: "movie"
  },
  {
    question: "A quel moment un magicien arrive-t-il ?",
    reply1: "en retard",
    reply2: "en avance",
    reply3: "à l'heure prévue",
    reply4: "Obi-Wan Kenobi",
    goodReply: "à l'heure prévue",
    className: "fantasy"
  },
  {
    question: "Que contient le baguette d'Harry Potter ?",
    reply1: "une plume de phéonix",
    reply2: "du sang de dragon",
    reply3: "une corne de licorne",
    reply4: "une griffe de griffon",
    goodReply: "une plume de phéonix",
    className: "fantasy"
  },
  {
    question: "Quel est le nom d'origine de Mario ?",
    reply1: "Jumpman",
    reply2: "Plumberman",
    reply3: "Redman",
    reply4: "Luigi",
    goodReply: "Jumpman",
    className: "videogame"
  },
  {
    question: "Que signifient les initiales de J.R.R. Tolkien ?",
    reply1: "Jeremiah Ruth Rogers",
    reply2: "James Reginald Ross",
    reply3: "John Ronald Reuel",
    reply4: "Jack Rory Reed",
    goodReply: "John Ronald Reuel",
    className: "fantasy"
  },
  {
    question: "Quel est le jeu le plus vendu de l'histoire ?",
    reply1: "Grand Theft Auto V",
    reply2: "Wii Sport",
    reply3: "Tetris",
    reply4: "Minecraft",
    goodReply: "Tetris",
    className: "videogame"
  },
  {
    question:
      "Dans quel Legend of Zelda apparaît pour la première fois Sheik ?",
    reply1: "Majora's Mask",
    reply2: "Ocarina of time",
    reply3: "Oracle of ages",
    reply4: "A link to Past",
    goodReply: "Ocarina of time",
    className: "videogame"
  },
  {
    question: "Quel est le nom de famille de Samus de Metroid ?",
    reply1: "Haron",
    reply2: "Cliff",
    reply3: "Aran",
    reply4: "Keith",
    goodReply: "Aran",
    className: "videogame"
  },
  {
    question:
      " Quel célèbre flic homme-robot a été adapté en comics par Frank Miller ?",
    reply1: "Terminator",
    reply2: "Robocop",
    reply3: "Bender",
    reply4: "Wall-E",
    goodReply: "Robocop",
    className: "sf"
  },
  {
    question: "A l'envers je parle, sages sont mes mots, qui suis-je ?",
    reply1: "Gandalf",
    reply2: "Obi-Wan Kenobi",
    reply3: "Yoda",
    reply4: "Albus Dumbledore",
    goodReply: "Yoda",
    className: "movie"
  },
  {
    question:
      " Quelle divinité membre des avengers est devenue une femme ?",
    reply1: "Black Widow",
    reply2: "Iron man",
    reply3: "Hulk",
    reply4: "Thor",
    goodReply: "Thor",
    className: "comics"
  },
  {
    question:
      "Quel personnage de Walking Dead se bat avec des katanas ?",
    reply1: "Rick",
    reply2: "Glenn",
    reply3: "Michonne",
    reply4: "Carl",
    goodReply: "Michonne",
    className: "comics"
  },
  {
    question: "Dans quel film Bill Murray extermine des ectoplasmes ?",
    reply1: "Un jour sans fin",
    reply2: "Ghostbusters",
    reply3: "Fantômes en fête",
    reply4: "Space Jam",
    goodReply: "Ghostbusters - SOS Fantômes",
    className: "movie"
  },
  {
    question:
      "A quelle vitesse doit aller une Dolorean pour retourner vers le futur ?",
    reply1: "2,21 gigowatts",
    reply2: "88 miles/heure",
    reply3: "88km/heure",
    reply4: "299 792 458 m/s",
    goodReply: "88 miles/heure",
    className: "sf"
  },
  {
    question: "Quelle est la boisson préférée du Dude ?",
    reply1: "White Russian",
    reply2: "Cosmopolitan",
    reply3: "Bloody Mary",
    reply4: "Irish Coffee",
    goodReply: "White Russian",
    className: "movie"
  },
  {
    question: " Qui est l'auteur du Necronomicon ?",
    reply1: " H.P. Lovecraft",
    reply2: "Robert E.Howard",
    reply3: "I.Ron Hubbard",
    reply4: "J.K. Rowling",
    goodReply: "H.P.Lovecraft",
    className: "fantasy"
  },
  {
    question: "Dans quelle ville se passe la série Breaking Bad ?",
    reply1: "Baltimore",
    reply2: "Albuquerque",
    reply3: "Minneapolis",
    reply4: "Gotham city",
    goodReply: "Baltimore",
    className: "movie"
  },
  {
    question:
      'Qui dit "de grands pouvoirs impliquent de grandes responsabilités"?',
    reply1: "Oncle Ben",
    reply2: "Alfred",
    reply3: "Superman",
    reply4: "Spiderman",
    goodReply: "Oncle Ben",
    className: "comics"
  },
  {
    question:
      "Quelle couleur de sabre laser a été inventé pour Samuel L. Jackson dans Star Wars ?",
    reply1: "Orange",
    reply2: "Rose",
    reply3: "Violet",
    reply4: "Marron",
    goodReply: "Violet",
    className: "movie"
  },
  {
    question: "Quel est le célèbre couple de détective du paranormal ?",
    reply1: "Mulder et Scully",
    reply2: "Sherlock et Dr. Watson",
    reply3: "Castle et Beckett ",
    reply4: "Minus et Cortex",
    goodReply: "Mulder et Scully",
    className: "sf"
  },
  {
    question: "Dans Minecraft, combien y a-t-il de sortes d'épée ?",
    reply1: "1",
    reply2: "5",
    reply3: "9",
    reply4: "7",
    goodReply: "5",
    className: "videogame"
  },
  {
    question: "Dans Mortal Kombat, quel ninja qui maîtrise le feu ?",
    reply1: "Scorpion",
    reply2: "Raiden",
    reply3: "Kung Lao",
    reply4: "Sub Zero",
    goodReply: "Scorpion",
    className: "videogame"
  },
  {
    question: "Qui est le personnage principal de Street Fighter ?",
    reply1: "Bison",
    reply2: "Ken",
    reply3: "Ryu",
    reply4: "Vega",
    goodReply: "Ryu",
    className: "videogame"
  },
  {
    question: "Quelle est la monnaie des sims ?",
    reply1: "Le Simcash",
    reply2: "Le Simflouz",
    reply3: "Le Simdollar",
    reply4: "La Simmoney",
    goodReply: "Le Simflouz",
    className: "videogame"
  },
  {
    question: "La mort de qui Max Payne cherche-t-il à venger ?",
    reply1: "Sa femme",
    reply2: "Sa fille",
    reply3: "Son meilleur ami",
    reply4: "Son père",
    goodReply: "Sa femme",
    className: "videogame"
  },
  {
    question: "Quel est le titre original des Dents de la mer ?",
    reply1: "Teeth of the sea",
    reply2: "Shark Attack",
    reply3: "Jaws",
    reply4: "Law of sea",
    goodReply: "Jaws",
    className: "movie"
  },
  {
    question:
      "Quel film de Night Shyamalan fait référence aux comics ?",
    reply1: "Signes",
    reply2: "Sixième Sens",
    reply3: "Incassable",
    reply4: "Le village",
    goodReply: "Incassable",
    className: "movie"
  },
  {
    question:
      "Dans le film Matrix, quelle pilule Neo va-t-il choisir ?",
    reply1: "La pilule bleue",
    reply2: "La pilule verte",
    reply3: "La pilule rouge",
    reply4: "La pilule jaune",
    goodReply: "La pilule rouge",
    className: "movie"
  },
  {
    question:
      "Dans le film Blade Runner, comment s'appellent les robots à l'apparence humaine ?",
    reply1: "Les prédicants",
    reply2: "Les réplicants",
    reply3: "Les pélicans",
    reply4: "Les gallicans",
    goodReply: "Les réplicants",
    className: "movie"
  },
  {
    question:
      "Dans la série Doctor Who, qu'est ce qu'il y a d'écrit sur le Tardis ?",
    reply1: "Police Box",
    reply2: "Police Public Call Box",
    reply3: "Police Call Box",
    reply4: "Tardis",
    goodReply: "Police Public Call Box",
    className: "movie"
  },
  {
    question:
      "Dans Interstellar, que représente une heure sur la planète Miller ?",
    reply1: "24h terrestres",
    reply2: "7 mois terrestres",
    reply3: "7 années terrestres",
    reply4: "12 années terrestres",
    goodReply: "7 années terrestres",
    className: "movie"
  },
  {
    question:
      "Dans la planète des singes, comment s'appelle le chimpanzé femelle qui sauve Ulysse Mérou ?",
    reply1: "Nova",
    reply2: "Jinn",
    reply3: "Zira",
    reply4: "Zaram",
    goodReply: "Zira",
    className: "movie"
  },
  {
    question:
      "Dans Star Trek :la Nouvelle Génération, pour combler son handicap, Geordi forge :",
    reply1: "Un bras articulé Neri",
    reply2: "Les lunettes Visor",
    reply3: "L'oeil bionique Visto",
    reply4: "L'appareil auditif Nest",
    goodReply: "Les lunettes Visor",
    className: "movie"
  },
  {
    question:
      "Dans l'Empire contre-attaque, comment s'appelle la cité des Nuages ?",
    reply1: "Coruscant",
    reply2: "Dagobah",
    reply3: "Bespin",
    reply4: "Hoth",
    goodReply: "Bespin",
    className: "movie"
  },
  {
    question: "Dans Un nouvel espoir, qui s'occupe de Luke ?",
    reply1: "Obi-Wan",
    reply2: "Sénateur Organa",
    reply3: "Han Solo",
    reply4: "Owens Lars",
    goodReply: "Obi-Wan",
    className: "movie"
  },
  {
    question:
      "Au début de la série Game of thrones, qui est sur le trône ?",
    reply1: "Aegon le conquérant",
    reply2: "Aerys le Roi fou",
    reply3: "Robert Baratheon",
    reply4: "Tywin Lannister",
    goodReply: "Robert Baratheon",
    className: "movie"
  },
  {
    question: "Ramsay Snow est le fils de :",
    reply1: "Tywin Lannister",
    reply2: "Petyr Baelish",
    reply3: "Roose Bolton",
    reply4: "Eddard Stark",
    goodReply: "Roose Bolton",
    className: "movie"
  },
  {
    question: "Dans quelle auberge les 4 hobbits rencontrent Aragorn ?",
    reply1: " Au Chien noir",
    reply2: "Au Poney fringant",
    reply3: "Au gris poil",
    reply4: "Au Cul-de-sac",
    goodReply: "Au Poney fringant",
    className: "fantasy"
  },
  {
    question: "Combien y a-t-il de Nazguls ?",
    reply1: "3",
    reply2: "13",
    reply3: "7",
    reply4: "9",
    goodReply: "9",
    className: "fantasy"
  }
];