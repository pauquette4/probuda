import { NAME } from '../actions/ProbudaActions'

const initialState = {
  authenticity_token: '',
  name: '',
  id: '',
  email: ''
};

export default function ProbudaReducer(state = initialState, action) {
  const {type, name} = action;
  switch (type) {
    case NAME:
      return name
    default:
      return state;
  }
}