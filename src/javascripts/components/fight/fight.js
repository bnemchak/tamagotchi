import utils from '../../helpers/utils';
import './fight.scss';

let strength = 100;

const buildFightQuad = () => {
  let domString = '<div class="fighting">';

  domString += '<h2>Fight</h2>';
  domString += `<h1>Strength Level: ${strength}</h1>`;
  domString += '<button id="runButton">Run Away</button>';
  domString += '<button id="hitButton">Be Mean</button>';
  domString += '</div>';

  utils.printToDom('#fight', domString);
};

const clickRunButtonEvent = (e) => {
  e.preventDefault();
  strength = Math.min(strength + 1, 100);
  buildFightQuad();
};

const clickHitButtonEvent = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength < 0) strength = 0;
  buildFightQuad();
};

$('body').on('click', '#runButton', clickRunButtonEvent);
$('body').on('click', '#hitButton', clickHitButtonEvent);

export default { buildFightQuad };
