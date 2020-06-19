import utils from '../../helpers/utils';
import './play.scss';

let fun = 100;

const buildPlayQuad = () => {
  let domString = '<div class="playing">';

  domString += '<h2>Play</h2>';
  domString += `<h1>Fun Level: ${fun}</h1>`;
  domString += '<button id="veryButton">Play Outside</button>';
  domString += '<button id="sortaButton">Play Inside</button>';
  domString += '</div>';

  utils.printToDom('#play', domString);
};

const clickVeryButtonEvent = (e) => {
  e.preventDefault();
  fun = Math.main(fun + 50, 100);
  buildPlayQuad();
};

const clickSortaButtonEvent = (e) => {
  e.preventDefault();
  fun = Math.main(fun + 2, 100);
  buildPlayQuad();
};

$('body').on('click', '#veryButton', clickVeryButtonEvent);
$('body').on('click', '#sortaButton', clickSortaButtonEvent);

export default { buildPlayQuad };
