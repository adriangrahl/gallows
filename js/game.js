var createGame = function (sprite) {

  var processInput = function(char) {

    if(!char.trim()) throw Error('Invalid guess');

    var exp = new RegExp(char, 'gi')
      , result
      , right = false;

    while (result = exp.exec(secretWord)) {
      right = true;
      fillGap(char, result.index);
    }

    if (!right){
      sprite.nextFrame();
    }
  };

  var won = function () {

    return letterList.length ? !letterList.some(gap => gap == '') : false;
  };

  var lost = function () {

    return sprite.isFinished();
  };

  var wonOrLost = function () {

    return won() || lost();
  };

  var fillGap = function (char, pos) {

    letterList[pos] = char;
  };

  var createGaps = function () {

    letterList = Array(secretWord.length).fill('');
  };

  var setStage = function () {

    stage = 2;
  };

  var setSecretWord = function(word) {

    if(!word.trim()) throw Error('Secret Word invalid');

    secretWord = word;
    setStage();
    createGaps();
  };

  var getStage = function() {

    return stage;
  };

  var getGaps = function() {

    return letterList;
  };

  var reset = function () {
    stage = 1;
    secretWord = '';
    letterList = [];
    sprite.reset();
  };

  var letterList = [];
  var stage = 1;
  var secretWord = '';

  return {

    setSecretWord : setSecretWord,
    getStage : getStage,
    getGaps : getGaps,
    processInput : processInput,
    won : won,
    lost : lost,
    wonOrLost : wonOrLost,
    reset : reset
  }
};
