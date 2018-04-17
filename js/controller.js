var createController = function (game) {

  var $input = $('#input');
  var $gaps = $('.gaps');

  var showGaps = function () {
    $gaps.empty();
    game.getGaps().forEach(function(gap, i) {
      $('<li>')
        .addClass('gap')
        .text(gap)
        .appendTo($gaps);
    });
  };

  var reset = function () {
    game.reset();
    $gaps.empty();
    changePlaceHolder('Secret Word');
  };

  var changePlaceHolder = function (text) {

    $input
      .val('')
      .attr('placeholder',text);
  };

  var guess = function () {

    game.processInput($input.val().trim().substr(0,1));
    $input.val('');
    showGaps();

    setTimeout(function() {
      if (game.wonOrLost()) {
        alert('Congrats, you have '+(game.won() ? 'won' : 'lost'));
        reset();
      }
    },200);
  };

  var keepSecretWord = function () {

    game.setSecretWord($input.val());
    $input.val('');
    showGaps();
    changePlaceHolder('guess');
  };

  var start = function () {

    $input.keypress(function (event) {
      if (event.which == 13) {
        switch (game.getStage()) {
          case 1:
            keepSecretWord();
            break;
          case 2:
            guess();
            break;
        }
      }
    });
  };

  return { start : start };
};
