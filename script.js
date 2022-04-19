

let selections = []; //Array containing user choices

(function() {
    
    let questionCounter = 0; //Tracks question number
    let quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      moreRandom = randoSequence(questions);
      questionArr = moreRandom.slice(0, 7);
      displayNext();
      $('#start').hide();
      clearInterval(startTimer);
      time = 75;
      startTimer();
      getUsedQuestions(questionArr);
      document.querySelector('.countdown-timer').style.display = 'inherit';
    });
    
    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      let qElement = $('<div>', {
        id: 'question'
      });
      
      let header = $('<h2>Question ' + (index + 1) + ' of '+ (questionArr.length) +'</h2>');
      qElement.append(header);
      
      let question = $('<p>').append(questionArr[index].value.question);
      qElement.append(question);
      
      let radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      let radioList = $('<ul>');
      let item;
      let input = '';
      for (let i = 0; i < questionArr[index].value.choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questionArr[index].value.choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        if(questionCounter < questionArr.length){
          let nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn('fast');
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } 
          else if(questionCounter === 0){
            $('#prev').hide();
            $('#next').show();
          }
        }
        else {
          let scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn(1000);
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
          let scoreString = document.getElementById('question');
          scoreString.style.textAlign = 'center';
        }
      });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      let score = $('<p>',
      {
        id: 'question'
      });
      
      let numCorrect = 0;
      for (let i = 0; i < selections.length; i++) {
        if (selections[i] === questionArr[i].value.correctAnswer) {
          numCorrect++;
        }
        createScore(numCorrect)
      };

    // Computes a symbol mark based on numCorrect / questions.length 
    const gradeSymbol = function(numCorrect){
      let symbolScore = (numCorrect/ questionArr.length) * 100;
      let finalTime = ` ${time} seconds.`;
      document.querySelector('.countdown-timer').style.display = 'none';

      if(symbolScore >= 80){
        console.log('a A');
        return symbolScore + '% gives you an A! <br><br> Your time left:' + finalTime;
      } 
      else if(symbolScore <= 79 && symbolScore >= 70){
        return symbolScore + '% gives you a B! <br> Your time left:' + finalTime;
      } 
      else if(symbolScore <= 69 && symbolScore >= 50){
        return symbolScore + '% gives you a C! <br> Your time left:' + finalTime;
      } 
      else {
        return symbolScore + '% gives you an F! <br> Your time left:' + finalTime;
      }
    };
      let symbolMark = gradeSymbol(numCorrect);

      score.append(`You got ${numCorrect} out of 
                   ${questionArr.length} questions correct, ${symbolMark}`);
      return score;
    }
  })();


// Selecting elements to display time and score on completion
const timeUpScore = document.getElementById('message-loss');
const labelTimer = document.querySelector('.timer'); 

// Setting the time (75 seconds standard, then 120, then 240)
let time = 75;

// Countdown timer 
const startTimer = function(){
  const timer = function(){
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2,0);

  // In each call, print remaining time to UI
  labelTimer.textContent = `${min}:${seconds}`;

  // When it hits 0, stop timer if all questions arent answered
  // If all questions answered stops clock with time left
  if(time === 0 && selections.length != questionArr.length){
    clearInterval(clockTimer);
    container.style.opacity = 0;
    document.querySelector('.countdown-timer').style.display = 'none';
    // Displaying the score out of five if player runs out of time
    document.querySelector('.lost-screen').style.display = 'inline';
    timeUpScore.textContent = `Your time has run out! You managed to get ${selections.length} out of ${questionArr.length} questions correct!`
    } 
    
    else if(selections.length == questionArr.length){
      clearInterval(clockTimer);
      
    }

  // Decrease time by 1 second
   time--;
  }

  // Call timer every second
  timer();
  const clockTimer = setInterval(timer, 1000);
  return timer;
  
};
startTimer();

// Return a node list with querySelectorAll
const buttonNode = document.querySelectorAll(".button");

// On toggle for overlay description menu
// Disabling buttons when overlay is active
function on(){
  document.getElementById("overlay").style.display = "inline-block";
  for(let i = 0; i < buttonNode.length; i++){
    buttonNode[i].style.display = "none";
  }
};

// Off toggle for overlay description menu
// Enabling buttons based on num of questions answered
// Accessing index of node list to disable/enable buttons
function off(){
  document.getElementById("overlay").style.display = "none";
  if(selections.length >= 0 && selections.length < 7){
  buttonNode[0].style.display = "inline";
  };
  if(selections.length >= 1 && selections.length < 7){
  buttonNode[1].style.display = "inline";
  };
  if(selections.length == questionArr.length){
    buttonNode[2].style.display = "inline";
  }
};


// Refresh page entirely by clicking on 'Quizle' in top left 
function refreshPage(){
  window.location.reload();
  localStorage.clear();
} 

// Change background color as timer nears 0
function changeColor() {
  if (time <= 90 && time >= 60) {
  labelTimer.style.color = '#00E676';
  }
  else if(time <= 60 && time >= 30){
    labelTimer.style.color = '#EED624';
  }
  else if(time <= 30 && time >= 15){
    labelTimer.style.color = '#FFAA33';
  }
  else if(time <= 15 && time >= 5){
    labelTimer.style.color = '#FF4433';
  }
  else if(time <= 5 && time >= 0){
    labelTimer.style.color = '#FB0606';
  }
};
const colorChange = setInterval(changeColor,1000);

function createScore(num){
  localStorage.setItem('high-score', JSON.stringify(num))
}




















// // Select timeout Audio element
// const timeoutAudio = document.getElementById("timeout_audio");
// // Initialize timeout sound
// timeoutAudio.src = "http://soundbible.com/grab.php?id=2044&type=mp3";
// timeoutAudio.load();
// // Update render Time with alarm audio on timeout
// // const renderTime = (time) => {
// //   // timeout on zero
// //   if (time === 0) {
// //     // Play audio on timeout
// //     timeoutAudio.play();
// //   }
// // };
// // const tickSound = setInterval(renderTime, 1000);