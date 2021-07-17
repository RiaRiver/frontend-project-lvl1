import runGame from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateArithmProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (i * diff));
  }

  return progression;
};

const hideCollElement = (coll, hiddenIndex, replacer = '..') => {
  const collCopy = [...coll];
  collCopy[hiddenIndex] = replacer;
  return collCopy;
};

const generateRoundData = () => {
  const startNumber = getRandomIntInclusive(0, 150);
  const progressionDiff = getRandomIntInclusive(1, 50);
  const progressionLength = getRandomIntInclusive(5, 10);
  const hiddenIndex = getRandomIntInclusive(0, progressionLength - 1);
  const replacer = '..';

  const progression = generateArithmProgression(startNumber, progressionDiff, progressionLength);

  const question = hideCollElement(progression, hiddenIndex, replacer).join(' ');
  const answer = progression[hiddenIndex].toString();

  return [question, answer];
};

const runProgressionGame = () => {
  runGame(description, generateRoundData);
};

export default runProgressionGame;
