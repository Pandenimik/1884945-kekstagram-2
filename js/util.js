const ESC_KEY = 'Escape';

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const makeCounter = (counterInitialValue = 1) => {
  let currentCount = counterInitialValue;
  return () => currentCount++;
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === ESC_KEY;

export {
  getRandomInteger,
  makeCounter,
  getRandomArrayElement,
  isEscapeKey
};
