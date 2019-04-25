const bowlingScore = require('../index.js');
const chai = require('chai');
const should = chai.should();

let testArray = [
  {
    pins: 10,
    balls: 2,
  },
  {
    pins: 9,
    balls: 2,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 8,
    balls: 2,
  },
  {
    pins: 8,
    balls: 2,
  },
  {
    pins: 8,
    balls: 2,
  },
  {
    pins: 10,
    balls: 2,
  },
  {
    pins: 10,
    balls: 1,
  },
  {
    pins: 9,
    balls: 2,
  },
  {
    pins: 10,
    balls: 1,
  },
];

describe('Bowling Score Calculator', function() {
  it('should return a number', function() {
    const number = bowlingScore(testArray);
    number.should.be.a('number');
  });

  it('should add the number of pins to the score if there has been no strike or spare', function() {
    const score = bowlingScore([
      {
        pins: 8,
        balls: 2,
      },
      {
        pins: 4,
        balls: 2,
      },
      {
        pins: 9,
        balls: 2,
      },
    ]);
    score.should.deep.equal(21);
  });

  it('should add the next number of pins as a bonus if a spare has been made', function() {
    const score = bowlingScore([
      {
        pins: 8,
        balls: 2,
      },
      {
        pins: 10,
        balls: 2,
      },
      {
        pins: 9,
        balls: 2,
      },
      {
        pins: 9,
        balls: 2,
      },
    ]);
    score.should.deep.equal(45);
  });

  it('should add the next two number of pins as a bonus if a strike has been made', function() {
    const score = bowlingScore([
      {
        pins: 8,
        balls: 2,
      },
      {
        pins: 10,
        balls: 1,
      },
      {
        pins: 9,
        balls: 2,
      },
      {
        pins: 8,
        balls: 2,
      },
      {
        pins: 9,
        balls: 2,
      },
    ]);
    score.should.deep.equal(61);
  });
  it('should accurately score a 10 frame game', function() {
    const score = bowlingScore(testArray);
    score.should.deep.equal(146);
  });
});
