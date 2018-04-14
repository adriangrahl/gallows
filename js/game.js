var createGame = function (sprite) {

  var findChar = function (char, startFrom) {
    return secretWord
      .split('')
      .indexOf(char, startFrom + 1);
  };

  var processInput = function(char) {
    var idxFound = secretWord
      .split('')
      .filter(c => c.includes(char))
      .reduce((currentIdx, c, i, arr) => {
        var result = findChar(c, currentIdx);
        fillGap(c, result);
        return result;
      },-1);

    if (idxFound > -1) {
      console.log('You nailed it!');
      return getGaps();
    } else
      sprite.nextFrame();
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
