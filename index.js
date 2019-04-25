'use strict';
let testArray = [
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 7,
    balls: 2,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 10,
    balls: 1,
  },
];

function bowlingScore(array) {
  let frameNumber = 1;
  let score = 0;
  let strike = 0;
  let spare = false;
  let lastFrameSpare = false;
  let lastFrameStrike = false;

  array.forEach((frame) => {
    if (frameNumber > 10) {
      if (lastFrameSpare === true) {
        lastFrameSpare = false;
      } else if (lastFrameStrike > 0 && lastFrameStrike < 3) {
        lastFrameStrike++;
      } else if (lastFrameSpare === false && lastFrameStrike === 0) {
        return score;
      }
    }
    if (spare === false && strike === 0) {
      score += frame.pins;
    } else if (spare === true && strike === 0) {
      score += frame.pins * 2;
      spare = false;
    } else if (spare === false && strike > 0) {
      score += frame.pins * 2;
      strike++;
      if ((strike = 3)) {
        strike = 0;
      }
    } else if (spare === true && strike > 0) {
      score += frame.pins * 2;
      spare = false;
      strike++;
      if ((strike = 3)) {
        strike = 0;
      }
    }

    if (frame.pins === 10) {
      if (frame.balls === 2) {
        spare = true;
      } else if (frame.balls === 1) {
        strike = 1;
      }
    }
    if (frameNumber === 10) {
      if (frame.pins === 10) {
        if (frame.balls === 2) {
          lastFrameSpare = true;
        } else if (frame.balls === 1) {
          lastFrameStrike = true;
        }
      } else {
        return score;
      }
    }
    frameNumber++;
  });
  return score;
}

console.log(bowlingScore(testArray));

module.exports = bowlingScore;
