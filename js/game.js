var createGame = function (sprite) {

  var processInput = function(char) {

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
    secretWord = word;
    setStage();
    createGaps();
  };

  var getStage = function() {
    return stage;
  };

  var getGaps = function() {
    return letterList;
  }

  var letterList = [];
  var stage = 1;
  var secretWord = '';

  return {
    setSecretWord : setSecretWord,
    getStage : getStage,
    getGaps : getGaps,
    processInput : processInput
  }
};
