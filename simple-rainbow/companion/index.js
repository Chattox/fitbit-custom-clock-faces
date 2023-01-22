import { settingsStorage } from 'settings';
import * as messaging from 'messaging';
import { me as companion } from 'companion';

settingsStorage.addEventListener('change', (event) => {
  sendValue(event.key, event.newValue);
});

if (companion.launchReasons.settingsChanged) {
  const backgroundSettings = settingsStorage.getItem('background');
  sendValue('background', backgroundSettings);
}

function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: key,
      value: JSON.parse(val),
    });
  }
}

function sendSettingData(data) {
  console.log(messaging.peerSocket.readyState);
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log('No peersocket connection');
  }
}
