import '../styles/main.scss';

import eat from './components/eat/eat';
import fight from './components/fight/fight';
import play from './components/play/play';
import sleep from './components/sleep/sleep';

const init = () => {
  eat.buildEatQuad();
  fight.buildFightQuad();
  play.buildPlayQuad();
  sleep.buildSleepQuad();
};

init();
