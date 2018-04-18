const createController = game => {

  const $input = $('#input');
  const $gaps = $('.gaps');

  const showGaps = () => {
    $gaps.empty();
    game.getGaps().forEach((gap, i) => {
      $('<li>')
        .addClass('gap')
        .text(gap)
        .appendTo($gaps);
    });
  };

  const reset = () => {
    game.reset();
    $gaps.empty();
    changePlaceHolder('Secret Word');
  };

  const changePlaceHolder = text => $input.val('').attr('placeholder',text);

  const guess = () => {

    try {

      game.processInput($input.val().trim().substr(0,1));
      $input.val('');
      showGaps();

      setTimeout(() => {
        if (game.wonOrLost()) {
          alert('You have '+(game.won() ? 'won' : 'lost'));
          reset();
        }
      },200);
    } catch (e) {

      alert(e.message);
    }
  };

  const keepSecretWord = () => {

    try {

      game.setSecretWord($input.val());
      $input.val('');
      showGaps();
      changePlaceHolder('guess');
    } catch (e) {

      alert(e.message);
    }
  };

  const start = () => {

    $input.keypress(event => {
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

  return { start };
};
