


function checkRand() {
  if(oldQuestions.length == 10){
    oxo.screens.loadScreen("end", function() {
      var endScorePlayer1 = document.getElementById('endScore__player1');
      var endScorePlayer2 = document.getElementById('endScore__player2');
      var homeReturn = document.getElementById('home__return');
      
      homeReturn.addEventListener('click', function(){
        oxo.screens.loadScreen("home", function() {
          
        });
      })

      var oldQuestions = [];
      endScorePlayer1.innerHTML = player1['score']+' pts';
      endScorePlayer2.innerHTML = player2['score']+' pts';
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