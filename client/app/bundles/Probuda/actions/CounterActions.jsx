export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
export const NAME = 'NAME';

export function name(name) {
  return {
    type: NAME,
    name: name
  };
}

export function setCounter(counter) {
  return {
    type: SET_COUNTER,
    counter: counter
  };
}

export function increment(counter) {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement(counter) {
  return {
    type: DECREMENT_COUNTER
  };
}