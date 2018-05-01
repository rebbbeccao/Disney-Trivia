$('#start-button').click(function() {
  console.log('click');
  game.start();
});
$(document).on('click', '#done', function() {
  game.done();
});

var questions = [
  {
    question:
      'In The Jungle Book, who teaches Mowgli about The Bare Necesseties of life?',
    answers: ['Bahgeera', 'Baloo', 'Shere Khan', 'King Louie'],
    correctAnswer: 'Baloo'
  },
  {
    question: 'Which Disney princess has a raccoon as a sidekick?',
    answers: ['Cinderella', 'Repunzel', 'Mulan', 'Pocahontas'],
    correctAnswer: 'Pocahontas'
  },
  {
    question:
      'In the movie Finding Nemo, which country has Nemo been taken to?',
    answers: ['Sydney', 'Antartica', 'Australia', 'Italy'],
    correctAnswer: 'Australia'
  },
  {
    question: "What is the name of Bambi's rabbit friend?",
    answers: ['Thumper', 'Flower', 'Olaf', 'Faline'],
    correctAnswer: 'Thumper'
  },
  {
    question:
      'In the movie Frozen, which song does Elsa sing as she builds the castle?',
    answers: [
      'When Will My Life Begin',
      'Under the Sea',
      'Let it Go',
      'Whistle While You Work'
    ],
    correctAnswer: 'Let It Go'
  },
  {
    question: 'Cruella de Vil is the villain in which Disney movie?',
    answers: ['101 Dalmations', 'Aladdin', 'Hercules', 'Brother Bear'],
    correctAnswer: '101 Dalmations'
  },
  {
    question: 'What does the crocodile swallow in Peter Pan?',
    answers: ['Hat', 'Wand', 'Clock', 'Sandwich'],
    correctAnswer: 'Clock'
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 30,
  countdown: function() {
    game.counter--;
    $('#counter').html(game.counter);
    if (game.counter <= 0) {
      console.log('Time is up!');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#sub-wrapper').prepend(
      " <h2>Time Remaining: <span id='counter'>30</span> Seconds</h2>"
    );
    $('#start-button').remove();
    for (var i = 0; i < questions.length; i++) {
      $('#quiz-area').append('<h3>' + questions[i].question + '</h3>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#quiz-area').append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answers[j] +
            "''> " +
            questions[i].answers[j] +
            ' '
        );
      }
    }
    $('#sub-wrapper').append(
      "<div id='done-button'><button id ='done'>Done!</button></div>"
    );
  },
  done: function() {
    $.each($("input[name = 'question-0']:checked"), function() {
      if ($(this).val == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-1']:checked"), function() {
      if ($(this).val == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-2']:checked"), function() {
      if ($(this).val == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-3']:checked"), function() {
      if ($(this).val == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-4']:checked"), function() {
      if ($(this).val == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-5']:checked"), function() {
      if ($(this).val == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-6']:checked"), function() {
      if ($(this).val == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $('#sub-wrapper h2').remove();
    $('#sub-wrapper').html('<h2>All Done!</h2>');
    $('#sub-wrapper').append('<h3>Correct Answers: ' + this.correct + '</h3>');
    $('#sub-wrapper').append(
      '<h3>Incorrect Answers: ' + this.incorrect + '</h3>'
    );
    $('#sub-wrapper').append(
      '<h3 id="unanswered">Unanswered: ' +
        (questions.length - (this.incorrect + this.correct)) +
        '</h3>'
    );
  }
};
