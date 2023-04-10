import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    const pauseTime = JSON.stringify(data.seconds);
    localStorage.setItem('videoplayer-current-time', pauseTime);
  }, 1000)
);

const timeFromStorage = localStorage.getItem(`videoplayer-current-time`) || 0;
player.setCurrentTime(JSON.parse(timeFromStorage));
