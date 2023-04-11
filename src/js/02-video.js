import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

const timeFromStorage = localStorage.getItem(`videoplayer-current-time`) || 0;
player.setCurrentTime(JSON.parse(timeFromStorage));
