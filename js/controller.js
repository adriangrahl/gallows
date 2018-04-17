var createController = function (game) {

  var $input = $('#input');
  var $gaps = $('.gaps');

  var showGaps = function () {
    $gaps.empty();
    game.getGaps().forEach(function(gap, i) {
      $('<li id="gap'+i+'">')
        .addClass('gap')
        .text(gap)
        .appendTo($gaps);
    });
    //$gaps.append("<li class='gap' id='gap"+i+"'></li>"));
  };

  var mudaPlaceHolder = function (text) {

    $input
      .val('')
      .attr('placeholder',text);
  };

  var guess = function () {

    game
      .processInput($input.val())
      .forEach(function(el, i) {
        $('#gap'+i).prop('innerHTML',el);
      });

    //$('#gap0').prop('innerHTML','a');
  };

  var keepSecretWord = function () {

    game.setSecretWord($input.val());
    $input.val('');
    showGaps();
    mudaPlaceHolder('guess');
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

  // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado.
  return { start : start };
};
