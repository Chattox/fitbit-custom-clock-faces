export const getBatteryImage = (battery) => {
  switch (true) {
    case battery.charging:
      return 'images/battery-charge.png';
    case battery.chargeLevel > 75:
      return 'images/battery-100.png';
    case battery.chargeLevel > 50:
      return 'images/battery-75.png';
    case battery.chargeLevel > 25:
      return 'images/battery-50.png';
    default:
      return 'images/battery-25.png';
  }
};
