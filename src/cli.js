import { input, output } from './consoleIO.js';

export default () => {
  output('Welcome to the Brain Games!');
  const playerName = input('May I have your name? ');
  output(`Hello, ${playerName}!`);
};
