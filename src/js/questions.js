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

function getAllQuestions() {
  return questions;
}