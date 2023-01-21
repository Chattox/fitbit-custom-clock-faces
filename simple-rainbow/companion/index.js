import { settingsStorage } from 'settings';
import * as messaging from 'messaging';

settingsStorage.addEventListener('change', (event) => {
  console.log(event.key);
  console.log(event.newValue);
});
