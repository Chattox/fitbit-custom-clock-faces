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
  messaging.peerSocket.send(data);
}
