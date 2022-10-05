import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';

const CURENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new VimeoPlayer (iframe);

iframePlayer.on('timeupdate', throttle(onPlay, 1000)); 

const PlayerStopTime = load(CURENT_TIME);

iframePlayer.setCurrentTime(PlayerStopTime).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        localStorage.removeItem(CURENT_TIME);
        break;
    }
});

function onPlay(data) {
    localStorage.setItem(CURENT_TIME, JSON.stringify(data.seconds));
  }
  
  function load(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Do not touch this value in Application: ', error.name);
    }
  }