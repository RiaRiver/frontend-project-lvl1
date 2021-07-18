import runGame from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

export const getGcd = (num1, num2) => {
  if (num1 === 0 && num2 === 0) return NaN;
  if (num2 === 0) return Math.abs(num1);

  return getGcd(num2, num1 % num2);
};

const generateRoundData = (rangeStart = 0, rangeEnd = 150) => {
  const firstNumber = getRandomIntInclusive(rangeStart, rangeEnd);
  const secondNumber = getRandomIntInclusive(rangeStart, rangeEnd);

  if (firstNumber === 0 && secondNumber === 0) return generateRoundData(rangeStart, rangeEnd);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber).toString();

  return [question, answer];
};

const runGcdGame = () => {
  runGame(description, generateRoundData);
};

export default runGcdGame;
