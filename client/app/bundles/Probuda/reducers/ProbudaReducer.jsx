import * as actionTypes from '../constants/ProbudaConstants'

const initialState = {
  authenticity_token: '',
  name: '',
  id: '',
  email: '',
  password: '',
  password_confirmation: '',
  logged_in: false,
  // budgets: []
};

export default function ProbudaReducer(state = initialState, action) {
  const {type, name, email, password, password_confirmation, logged_in} = action;
  switch (type) {
    case actionTypes.PROBUDA_NAME_UPDATE:
      return name
    case actionTypes.PROBUDA_EMAIL_UPDATE:
      return email
    case actionTypes.PROBUDA_PASSWORD_UPDATE:
      return password
    case actionTypes.PROBUDA_NAME_UPDATE:
      return password_confirmation
    case actionTypes.LOGGED_IN:
      return logged_in
    // case actionTypes.ADD_BUDGET_ROW:
    //   return [
    //     ...state,
    //     {
    //       budgets: [
    //       description: budgets.description,
    //       amount: budgets.amount,
    //       units: budgets.units,
    //       x: budgets.x,
    //       rate: budgets.rate,
    //       ]
          
      //   }
      // ];
    default:
      return state
  }
}