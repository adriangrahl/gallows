const createGame = (sprite) => {

  const processInput = (char) => {

    if(!char.trim()) throw Error('Invalid guess');

    const exp = new RegExp(char, 'gi');
    let result
      , right = false;

    while (result = exp.exec(secretWord)) {
      right = true;
      fillGap(char, result.index);
    }

    if (!right){
      sprite.nextFrame();
    }
  };

  const won = () => letterList.length ? !letterList.some(gap => gap == '') : false;

  const lost = () => sprite.isFinished();

  const wonOrLost = () => won() || lost();

  const fillGap = (char, pos) => letterList[pos] = char;

  const createGaps = () => letterList = Array(secretWord.length).fill('');

  const setStage = () => stage = 2;

  const setSecretWord = (word) => {

    if(!word.trim()) throw Error('Secret Word invalid');

    secretWord = word;
    setStage();
    createGaps();
  };

  const getStage = () => stage;

  const getGaps = () => letterList;

  const reset = () => {
    stage = 1;
    secretWord = '';
    letterList = [];
    sprite.reset();
  };

  let letterList = [];
  let stage = 1;
  let secretWord = '';

  return {

    setSecretWord,
    getStage,
    getGaps,
    processInput,
    won,
    lost,
    wonOrLost,
    reset
  }
};
