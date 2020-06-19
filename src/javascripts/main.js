import '../styles/main.scss';

import eat from './components/eat/eat';
import fight from './components/fight/fight';
import play from './components/play/play';
import sleep from './components/sleep/sleep';

const init = () => {
  eat.eatQuad();
  fight.fightQuad();
  play.playQuad();
  sleep.sleepQuad();
};

init();
