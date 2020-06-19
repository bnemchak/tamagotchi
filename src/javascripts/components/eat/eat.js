import utils from '../../helpers/utils';
import './eat.scss';

let full = 100;

const buildEatQuad = () => {
  let domString = '<div class="eating">';

  domString += '<h2>Eat</h2>';
  domString += `<h1>Fullness Level: ${full}</h1>`;
  domString += '<button id="healthButton">Veggies</button>';
  domString += '<button id="grossButton">Fries</button>';
  domString += '</div>';

  utils.printToDom('#eat', domString);
};

const clickVeggiesButtonEvent = (e) => {
  e.preventDefault();
  full = Math.min(full + 10, 100);
  buildEatQuad();
};

const clickFriesButtonEvent = (e) => {
  e.preventDefault();
  full -= 3;
  if (full < 0) full = 0;
  buildEatQuad();
};

$('body').on('click', '#healthButton', clickVeggiesButtonEvent);
$('body').on('click', '#grossButton', clickFriesButtonEvent);

export default { buildEatQuad };
