const questions = [{
    question: 'What does WWW stand for?',
    choices: [' Where Was Wally.', ' Wet Wild Wrinkled.', ' When What Will.', ' World Wide Web.', ' Why Would Wilfred.'],
    correctAnswer: 3
  }, {
    question: 'What geometric shape is generally used for stop signs?',
    choices: [' Pentagon.', ' Square.', ' Triangle.', ' Octagon.', ' Hexagon.'],
    correctAnswer: 3
  }, {
    question: 'What is cynophobia?',
    choices: ['Fear of mice.', 'Fear of chickens.', 'Fear of ducks.', 'Fear of milk.', 'Fear of dogs.'],
    correctAnswer: 4
  }, {
    question: 'Who was the first woman to win a Nobel Prize (in 1903)?',
    choices: ['Rosalind Franklin.', 'Mary Anning.', 'Marie Curie.', 'Ada Lovelace.', 'Lise Meitner.'],
    correctAnswer: 2
  }, {
    question: 'What is the most consumed manufactured drink in the world?',
    choices: ['Tea.', 'Coffee.', 'Coca-Cola.', 'Pepsi.', 'Wine.'],
    correctAnswer: 0
  }, {
      question: 'Which country invented ice cream?',
      choices: [' USA.', ' Switzerland.', ' UK.', ' China.', ' Egypt.'],
      correctAnswer: 3
  }, {
      question: 'From which country does Gouda cheese originate?',
      choices: [' Netherlands.', ' Italy.', ' Switzerland.', ' China.', ' USA.'],
      correctAnswer: 0
  }, {
      question: 'Who created Sherlock Holmes?',
      choices: [' Roald Dahl.', ' George Orwell.', ' Christopher Nolan.', ' J.R.R Tolkien.', ' Sir Arthur Conan Doyle.'],
      correctAnswer: 4
  }, {
      question: 'What famous US festival hosted over 350,000 fans in 1969?',
      choices: [' Rock Am Ring.', ' Woodstock.', ' Synergy.', ' Burning Man.', ' Fyre Festival.'],
      correctAnswer: 1
  }, {
      question: 'Which two countries have not missed one of the modern-day Olympics?',
      choices: [' Greece & USA.', ' Germany & Italy.', ' Australia & China.', ' Greece & Australia.', ' USA & China.'],
      correctAnswer: 3
  }, {
      question: 'Which Football team is the only one to go unbeaten throughout a Premier League season?',
      choices: [' Manchester United.', ' Chelsea.', ' Leeds United.', ' Arsenal.', ' Real Madrid.'],
      correctAnswer: 3
  }, {
      question: 'Which country won the first-ever Football World Cup in 1930?',
      choices: ['Argentina.', ' Brazil.', ' Germany.', ' Italy.', ' Uruguay.'],
      correctAnswer: 4
  }, {
      question: 'Who is the most successful Formula One driver based on wins and titles?',
      choices: [' Ayrton Senna.', ' Alain Prost.', ' Sir Lewis Hamilton.', ' Michael Schumacher.', ' Felipe Massa.'],
      correctAnswer: 2
  }, {
      question: 'Which Formula One driver has the best win percentage of all-time?',
      choices: [' Valteri Bottas.', ' Michael Schumacher.', ' Sir Lewis Hamilton.', ' Jim Clark.', ' Juan Manuel Fangio.'],
      correctAnswer: 4
  }, { 
      question: 'What is the smallest country in the world?',
      choices: [' New Zealand.', ' Samoa.', ' Chad.', ' Vatican.', ' Hungary.'],
      correctAnswer: 3
  }, {
      question: 'Which one of the below is a double landlocked country?',
      choices: [' Italy.', ' Namibia.', ' Lesotho.', ' Belarus.', ' Uzbekistan.'],
      correctAnswer: 4
  }, {
      question: 'Which Country has the most official languages?',
      choices: [' South Africa.', ' Russia.', ' New Zealand.', ' Zimbabwe.', ' Brazil.'],
      correctAnswer: 3
  }, {
      question: 'The unicorn is the national animal of which country?',
      choices: [' USA.', ' Italy.', ' Serbia.', ' Japan.', ' Scotland.'],
      correctAnswer: 4
  }, {
      question: 'What is the name of the Coffee shop in US sitcom Friends?',
      choices: [' Bean There.', ' Drip In.', ' Ground.', ' Central Perk.', ' Heard a latte bout you.'],
      correctAnswer: 3
  }, {
      question: 'How many times has England won the mens football World Cup?',
      choices: [' 1', ' 2', ' 0', ' 3', ' 4'],
      correctAnswer: 0
  }, {
      question: 'Street artist Banksy is originally associated with which British city?',
      choices: [' Liverpool.', ' Bristol.', ' Manchester.', ' London.', ' Brighton.'],
      correctAnswer: 1
  }, {
      question: 'From what grain is the Japanese spirit Sake made?',
      choices: [' Wheat.', ' Oats.', ' Rice.', ' Rye.', ' Barley.'],
      correctAnswer: 2
  }, {
      question: 'How many permanent teeth does a dog have?',
      choices: [' 32', ' 40', ' 18', ' 42', ' 28'],
      correctAnswer: 3
  }, {
      question: 'How fast is the speed of light in m/s?',
      choices: [' 1000', ' 300,000', ' 10,000', ' 250,000', ' 100,000'],
      correctAnswer: 1
  }, {
      question: 'How many different teams have won the Premier League since the start of the inaugural season in 1992/93?',
      choices: [' 4', ' 5', ' 8', ' 10', ' 6'],
      correctAnswer: 4
  }, {
      question: 'At which venue is the British Grand Prix held?',
      choices: [' Imola.', ' Silverstone.', ' Monza.', ' Kyalami.', ' Jeddah.'],
      correctAnswer: 1
  }, {
      question: 'What is the capital of Finland?',
      choices: [' Espoo.', ' Turku.', ' Helsinki.', ' Vaasa.', ' Stockholm.'],
      correctAnswer: 2
  }, {
      question: 'What is the currency of Vietnam?',
      choices: ['Vietnamese Dollar', ' US Dollar', ' Baht', ' Dong', ' Dinar'],
      correctAnswer: 3
  }, {
      question: "Who sang 2003 hit Stacy's Mom?",
      choices: [' blink-182.', ' Korn.', ' Fountains of Wayne.', ' Sum 41.', ' Hoobastank.'],
      correctAnswer: 2
  }, {
      question: 'Which is the most successful F1 team? With how many titles?',
      choices: [' Mercedes, 8', ' Lotus, 12', ' Ferrari, 16', ' McClaren, 16', ' Red Bull, 8'],
      correctAnswer: 2
  }, {
    question: 'In which year did Taylor Swift release her debut single, Love Story?',
    choices: [' 2007', ' 2009', ' 2008', ' 2010', ' 2006'],
    correctAnswer: 2
}, {
    question: 'Who is the former drummer of Nirvana who fronts the Foo Fighters?',
    choices: [' Joey Jordison.', ' James Hetfield.',' Chad Smith.',  ' Dave Grohl.', ' Travis Barker.'],
    correctAnswer: 3
}, {
    question: 'What is the longest river in the world?',
    choices: [' Thames.', ' Nile', ' Amazon', ' Mekong.', ' Yangtze.'],
    correctAnswer: 1
}, {
    question: 'In Harry Potter, where does Vernon Dursley work?',
    choices: [' HP, Printer Manufacturer.', ' Hollards, Insurance', ' Grunnings, Drill Manufacturer', ' Costa, Manager', ' Harrods, Finance'],
    correctAnswer: 2
}, {
    question: 'What do you call a collective of Bears?',
    choices: [' Murder.', ' Family.', ' Pack.', ' Stampede.', ' Sloth.'],
    correctAnswer: 4
}, {
    question: 'What does a Geiger Counter measure?',
    choices: [' Wind Speed.', ' Radiation.', ' Temperature.', ' Seismic Activity.', ' Viscosity.' ],
    correctAnswer: 1
}, {
    question: 'By what name did the Romans refer to Scotland?',
    choices: [' Mesopotamia.', ' Nubia.', ' Atlantis.', ' Caledonia.', ' Albion.'],
    correctAnswer: 3
}, {
    question: 'How many sides does a dodecahedron have?',
    choices: [' 8', ' 12', ' 16', ' 10', ' 14'],
    correctAnswer: 1
}, {
    question: 'Which bird can fly backwards?',
    choices: [' Dove.', ' Swallow.', ' Hummingbird.', ' Flamingo.', ' Turkey.'],
    correctAnswer: 2
}, {
    question: 'The anvil and stirrup are located in which part of the human body?',
    choices: [' Nose.', ' Neck.', ' Finger.', ' Ear.', ' Shoulder.' ],
    correctAnswer: 3
}, {
    question: 'What is a funambulist?',
    choices: [' A Lawyer.', ' A tightrope walker.', ' A position in a Kitchen.', ' A Car Designer.', ' A Scientist who studies taste.'],
    correctAnswer: 1
}, {
    question: 'Dihydrogen Monoxide is better known as?',
    choices: [' Sulphuric Acid.', ' Coffee.', ' Water.' ,' Ammonia.',' Mercury.'],
    correctAnswer: 2
}, {
    question: 'How many balls are on a pool table at the start of a game?',
    choices: [' 12.', ' 14.', ' 18.', ' 16.', ' 20.' ],
    correctAnswer: 3
}, {
    question: 'What is the first event in the Decathlon?',
    choices: [' Hammer Throw.', ' High Jump.', ' 5000m.', ' 100m.', ' Long Jump.'],
    correctAnswer: 3
}, {
    question: 'Mageirocophobia is the fear of what?',
    choices: [' Cooking.', ' Furry Animals.', ' Seagulls.', ' The colour Magenta.', ' Magnets.'],
    correctAnswer: 0
}, {
    question: 'What is measured in Mickeys?',
    choices: [' Length of ears.', ' Speed of popcorn kernels popping.', ' Speed of computer mouse.', ' Speed of a Camera Shutter.', ' Weight of mice.'],
    correctAnswer: 2
}, {
    question: 'Where on the human body is the zygomatic bone found?',
    choices: [' Nose.', ' Cheek.', ' Ear.', ' Knee.', ' Spine.'],
    correctAnswer: 1
}, {
    question: 'It was illegal for women to wear what in 19th century Florence?',
    choices: [' Socks.', ' Pants.', ' Buttons.', ' Bowler Hats.', ' Pink Dresses.'],
    correctAnswer: 2
}, {
    question: 'What do you call a group of Unicorns?',
    choices: [' a Murder.', ' a School.', ' a Packet.', ' a Blessing.', ' a Pod.'],
    correctAnswer: 3
}, {
    question: 'In which year were minute hands introduced to clocks?',
    choices: [' 1803.', ' 1577.', ' 1901.', ' 1366.', ' 1762.'],
    correctAnswer: 1
}, {
    question: 'Where would you find The Spanish Steps?',
    choices: [' Lima, Peru.', ' Rio de Janeiro, Brazil.', ' Sevilla, Spain.', ' Rome, Italy.', ' Madrid, Spain.'],
    correctAnswer: 3
}, {
    question: 'Which country was divided into different occupational zones by the Yalta Agreement?',
    choices: [' Japan.', ' Argentina.', ' Germany.', ' Hungary.', ' Australia.'],
    correctAnswer: 2
}, {
    question: 'What name was given to the practise of killing every tenth man in a mutinous Roman Cohort?',
    choices: [' Decimate.', ' Obliterate.', ' Conflagrate.', ' Meditate.', ' Assimilate.'],
    correctAnswer: 0
}, {
    question: 'What is the modern-day name for the area where The Hanging Gardens were situated?',
    choices: [' India.', ' Turkey.', ' Iraq.', ' Belgium.', ' Pakistan.'],
    correctAnswer: 2
}, {
    question: 'Who was the British Prime Minister at the outbreak of WWII?',
    choices: [' Winston Churchill.', ' Tony Blair.', ' Margaret Thatcher.', ' Neville Chamberlain.', ' David Cameron.'],
    correctAnswer: 3
}, {
    question: 'What was the name of the B-29 Bomber used to drop the Nuclear Bomb on Hiroshima?',
    choices: [' Fat Man.', ' Enola Gay.', ' Truman Show.', ' Little Boy.', ' Tibbets.'],
    correctAnswer: 1
}, {
    question: 'What is the nationality of the artist Picasso?',
    choices: [' Italian.', ' French.', ' Spanish.', ' Belgian.', ' Icelandic.'],
    correctAnswer: 2
}, {
    question: 'The character "Lady Catherine de Bourgh" appears in which book?',
    choices: [' The Great Gatsby.', ' Lord of The Rings.', ' The Book Thief.', ' Wuthering Heights.', ' Pride and Prejudice.'],
    correctAnswer: 4
}, {
    question: 'What energy does an Eolic power station generate?',
    choices: [' Nuclear.', ' Seismic.', ' Hydro.', ' Wind.', ' Static.'],
    correctAnswer: 3
},{
    question: 'If a Premier League team finishes in the Top 4, how many competitions will they compete in the following season?',
    choices: [' 3.', ' 2.', ' 4.', ' 5.', ' 1.'],
    correctAnswer: 2
},{
    question: 'Who was the Ancient Greek God of the Sun?',
    choices: [' Hermes.', ' Poseidon.', ' Zeus.', ' Persephone.', ' Apollo.'],
    correctAnswer: 4
},{
    question: 'Aureolin is a shade of what colour?',
    choices: [' Blue.', ' Yellow.', ' Red.', ' Purple.', ' Green.'],
    correctAnswer: 1
},{
    question: 'What is a collective of pandas known as?',
    choices: [' A troop.', ' A gaggle.', ' An embarassment.', ' A school.', ' A pack.'],
    correctAnswer: 2
},{
    question: 'How many dots appear on a pair of dice?',
    choices: [' 40.', ' 36.', ' 20', ' 42.', ' 48.'],
    correctAnswer: 3
},{
    question: "What is Postman Pat's surname?",
    choices: [' Pat.', ' Clifton.', ' Smith.', ' Blair.', ' McGregor.'],
    correctAnswer: 1
},{
    question: 'Which body of the water was called "mare nostrum" by the Romans?',
    choices: [' Red Sea.', ' Atlantic Ocean.', ' Pacific Ocean.', ' Mediterranean Sea.', ' Amazon River.'],
    correctAnswer: 3
},{
    question: 'What military operation took place on June 6th 1944?',
    choices: [' Operation Overlord.', ' Operation Vittles.', ' Operation Red Dawn.', ' Operation Rolling Thunder.', ' Operation Urgent Fury.'],
    correctAnswer: 0
},{
    question: 'People with Alektorophobia are afraid of what?',
    choices: [' The smell of wax.', ' Pigeons.', ' Chickens.', ' Open spaces.', ' Sunlight.'],
    correctAnswer: 2
},{
    question: 'What was the result of the lawsuit filed in 1854 by Elizabeth Jennings Graham?',
    choices: [' Desegregation of NYC Transit systems.', ' Introduction of minimum wage.', ' Start of the civil rights movement.',
    ' Women allowed into industrial workforce.', ' Human right to free medical care.'],
    correctAnswer: 0
},{
    question: 'What special livestock can you see at the Exuma Cays?',
    choices: [' Flying mice.', ' Swimming pigs.', ' The Dodo.', ' Cats living in trees.', ' Caniballistic bears.'],
    correctAnswer: 1
},{
    question: 'Which letter is the most recently added to the English alphabet?',
    choices: [' X.', ' Y.', ' J.', ' G.', ' I.'],
    correctAnswer: 2
},{
    question: 'What kind of animal was Pollyanna, who lived aboard a submarine for 6 weeks?',
    choices: [' Dog.', ' Cat.', ' Parakeet.', ' Mouse.', ' Reindeer.'],
    correctAnswer: 4
},{
    question: 'What is the maximum number of times you are able to fold a piece of paper?',
    choices: [' 7.', ' 10.', ' 8.', ' 11.', ' 16.'],
    correctAnswer: 2
},{
    question: 'What do you fear if you suffer from triskaidekaphobia?',
    choices: [' Birds.', ' The number 18.', ' Brown bananas.', ' The number 13.', ' The open ocean.'],
    correctAnswer: 3
},{
    question: 'Where would you find the Sea of Tranquility?',
    choices: [' South Africa.', ' The Moon.', ' Japan.', ' USA.', ' Australia.'],
    correctAnswer: 1
},{
    question: 'In what year was slavery abolished in the USA?',
    choices: [' 1940.', ' 1885.', ' 1890.', ' 1900.', ' 1865.'],
    correctAnswer: 4
},{
    question: 'What is the metal that gives its name to a 70th wedding anniversary?',
    choices: [' Tin.', ' Platinum.', ' Silver.', ' Iron.', ' Steel.'],
    correctAnswer: 1
},{
    question: 'Which actor plays Mike Hannigan in the show Friends?',
    choices: [' Matt LeBlanc.', ' Matthew Perry.', ' Robert Downey Jr.', ' Paul Rudd.', ' Mark Ruffalo.'],
    correctAnswer: 3
},{
    question: 'Which country has the shortest coastline in the world?',
    choices: [' Japan.', ' Italy.', ' Ukraine.', ' Uzbekistan.', ' Monaco.'],
    correctAnswer: 4
},{
    question: 'Which novelist wrote of a farm run by pigs and of the imaginary world of 1984?',
    choices: [' Charles Dickens.', ' George Orwell.', ' J.K. Rowling.', ' Mark Twain.', ' Ernest Hemingway.'],
    correctAnswer: 1
},{
    question: 'What does HP stand for in HP sauce?',
    choices: [' High Praise.', ' Heavy Potassium.', ' Huge Plums.', ' Houses of Parliament.', ' Harry Potter.'],
    correctAnswer: 3
},{
    question: 'What is Oology the study of?',
    choices: [' Birds.', ' Cheese.', ' Eggs.', ' Grains.', ' Eyes.'],
    correctAnswer: 3
},{
    question: 'Who replaced Richard Harris as Dumbledore in the Harry Potter films?',
    choices: [' Michael Gambon.', ' Christopher Lee.', ' Sir Ian McKellan.', ' Leonardo DiCaprio.', ' Stan Lee.'],
    correctAnswer: 0
},{
    question: 'In the Coen Brothers film The Big Lebowski – what cocktail is the favourite of The Dude?',
    choices: [' Martini.', ' Old Fashioned.', ' White Russian.', ' Mojito.', ' Boulevardier.'],
    correctAnswer: 2
},{
    question: 'How many paintings did Van Gogh sell during his lifetime?',
    choices: [' None.', ' 3.', ' 18.', ' 1.', ' 7.'],
    correctAnswer: 3
},{
    question: 'Which country has the shortest coastline in the world?',
    choices: [' Japan.', ' Italy.', ' Ukraine.', ' Uzbekistan.', ' Monaco.'],
    correctAnswer: 4
},{
    question: 'Which country has the shortest coastline in the world?',
    choices: [' Japan.', ' Italy.', ' Ukraine.', ' Uzbekistan.', ' Monaco.'],
    correctAnswer: 4
},{
    question: 'Which country has the shortest coastline in the world?',
    choices: [' Japan.', ' Italy.', ' Ukraine.', ' Uzbekistan.', ' Monaco.'],
    correctAnswer: 4
},{
    question: 'Which country has the shortest coastline in the world?',
    choices: [' Japan.', ' Italy.', ' Ukraine.', ' Uzbekistan.', ' Monaco.'],
    correctAnswer: 4
}];
























console.log(questions.length)


// Script for genrating arrays for questions
// Generating an array using a randomizer to select questions from
// Creates a copy of the questions array with objects in a random order
let moreRandom = randoSequence(questions);

// // Grabbing the first 5 objects from moreRandom array
// // Standard quiz - timed at 75 seconds
// let smallArr = moreRandom.slice(0, 5);
// console.log(smallArr);
// // Grabbing first 10 objects from moreRandom array
// // Longer quiz - timed at 120 seconds (no scoreboard)
// let medArr = moreRandom.slice(0, 10);
// console.log(medArr);
// Grabbing first 20 objects from moreRandom array
// Longest quiz - timed at 240 seconds (no score - much harder)
let questionArr = moreRandom.slice(0, 7);
console.log(questionArr);

// Creating a new array of used questions
// Saves entire question in questionSets array
let questionSets = [];
function getUsedQuestions(arr){
for (let i = 0; i < arr.length; i++) {
  questionSets.push(arr[i])
}
};
getUsedQuestions(questionArr)
console.log(questionSets)








// FUTURE IMPLEMENTATION
// Using index of used question to filter out newly returned questions array
// Another method to generate an array of random questions - high possibility of duplicates
/*
let randomQuestions = [];
for(let i = 0; i < 5; i++){
    let item = moreRandom[Math.floor(Math.random()*moreRandom.length)];
    randomQuestions.push(item);
}*/


