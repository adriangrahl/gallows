var createGame = function () {

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
    getGaps : getGaps
  }
};
