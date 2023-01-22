import clock from 'clock';
import document from 'document';
import { HeartRateSensor } from 'heart-rate';
import { display } from 'display';
import { me as appbit } from 'appbit';
import { battery } from 'power';
import * as messaging from 'messaging';

import { zeroPad } from '../utils/zeroPad';
import { shortDays, shortMonths } from '../utils/shortDates';
import { getBatteryImage } from '../utils/getBatteryImage';

const txtTime = document.getElementById('txtTime');
const txtDate = document.getElementById('txtDate');
const txtHeartRate = document.getElementById('txtHeartRate');
const txtBattery = document.getElementById('txtBattery');
const imgBattery = document.getElementById('imgBattery');
const imgBackground = document.getElementById('imgBackground');
const imgHeart = document.getElementById('imgHeart');

messaging.peerSocket.addEventListener('message', (event) => {
  if (event && event.data && event.data.key === 'background') {
    imgBackground.href = event.data.value.values[0].value;
    imgHeart.href =
      event.data.value.values[0].value == 'images/rainbow-bright.png'
        ? 'images/heart-bright.png'
        : 'images/heart-neon.png';
  }
});

clock.granularity = 'seconds';
clock.ontick = (evt) => {
  const today = evt.date;

  const monthNameShort = shortMonths[today.getMonth()];
  const dayNameShort = shortDays[today.getDay()];
  const dayNumber = today.getDate();

  const hours = zeroPad(today.getHours());
  const mins = zeroPad(today.getMinutes());

  const timeString = `${hours}:${mins}`;
  const dateString = `${dayNameShort} ${dayNumber} ${monthNameShort}`;

  if (HeartRateSensor && appbit.permissions.granted('access_heart_rate')) {
    const hrm = new HeartRateSensor();
    hrm.addEventListener('reading', () => {
      txtHeartRate.text = `${hrm.heartRate}`;
    });

    display.addEventListener('change', () => {
      if (display.on) {
        hrm.start();
      } else {
        hrm.stop();
      }
    });

    hrm.start();
  }

  const batteryString = `${battery.chargeLevel}%`;

  txtTime.text = timeString;
  txtDate.text = dateString;
  txtBattery.text = batteryString;
  imgBattery.href = getBatteryImage(battery);
};
