export function calculatePower(voltage, resistance) {
  return voltage / resistance;
}


export function swapCase(text) {
  return text
    .split('')
    .map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join('');
}


export function formatAddress(street, city, country, postalCode) {
  return `${street}, ${city}, ${postalCode}, ${country}`;
}


export function getTimeOfDay(time) {
  if (typeof time !== 'number' || time < 0 || time > 23) {
    return 0;
  }

  if (time >= 0 && time <= 5) {
    return 'Ночь';
  }

  if (time >= 6 && time <= 11) {
    return 'Утро';
  }

  if (time >= 12 && time <= 17) {
    return 'День';
  }

  if (time >= 18 && time <= 23) {
    return 'Вечер';
  }
}


export function countLetter(text, symb) {
  if (typeof text !== 'string' || typeof symb !== 'string' || symb.length !== 1) {
    return 0;
  }

  let count = 0;

  for (let char of text) {
    if (char === symb) {
      count++;
    }
  }

  return count;
}
