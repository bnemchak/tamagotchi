import utils from '../../helpers/utils';
import './sleep.scss';

let energy = 100;

const buildSleepQuad = () => {
  let domString = '<div class="sleeping">';

  domString += '<h2>Sleep</h2>';
  domString += `<h1>Energy Level: ${energy}</h1>`;
  domString += '<button id="napButton">Nap Nap</button>';
  domString += '<button id="sleepButton">Sleepy Time</button>';
  domString += '</div>';

  utils.printToDom('#sleep', domString);
};

const clickSleepButtonsEvent = (e) => {
  const buttonId = e.target.id;

  if (energy === 100) return;

  if (buttonId === 'napButton') {
    energy += 50;
  } else {
    energy += 60;
  }

  if (energy > 100) energy = 100;

  console.error(energy);
  buildSleepQuad();
};

$('body').on('click', '#napButton', clickSleepButtonsEvent);
$('body').on('click', '#sleepButton', clickSleepButtonsEvent);

export default { buildSleepQuad };
