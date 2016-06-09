import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER, NAME } from '../actions/CounterActions';

const initialState = {
  counter: 0,
  name: '',
};

export default function CounterReducer(state = initialState, action) {
  const {type, name, counter} = action;
  switch (type) {
    case INCREMENT_COUNTER:
      return counter + 1;
    case DECREMENT_COUNTER:
      return counter - 1;
    case SET_COUNTER:
      return counter;
    case NAME:
      return name
    default:
      return state;
  }
}