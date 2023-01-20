import clock from 'clock';
import document from 'document';

import { zeroPad } from '../utils/zeroPad';
import { shortDays, shortMonths } from '../utils/shortDates';

const txtTime = document.getElementById('txtTime');
const txtDate = document.getElementById('txtDate');

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

  txtTime.text = timeString;
  txtDate.text = dateString;
};
