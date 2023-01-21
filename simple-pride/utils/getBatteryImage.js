export const getBatteryImage = (battery) => {
  switch (true) {
    case battery.charging:
      return 'battery-charge.png';
    case battery.chargeLevel > 75:
      return 'battery-100.png';
    case battery.chargeLevel > 50:
      return 'battery-75.png';
    case battery.chargeLevel > 25:
      return 'battery-50.png';
    default:
      return 'battery-25.png';
  }
};
