import * as types from '../constants/ProbudaConstants'

export function updateName(name) {
  return {
    type: types.PROBUDA_NAME_UPDATE,
    name
  };
}

export function updateEmail(email) {
  return {
    type: types.PROBUDA_EMAIL_UPDATE,
    email
  };
}

export function updatePassword(password) {
  return {
    type: types.PROBUDA_PASSWORD_UPDATE,
    password
  };
}

export function updatePasswordConfirmation(password_confirmation) {
  return {
    type: types.PROBUDA_PASSWORD_CONFIRMATION_UPDATE,
    password_confirmation
  };
}

export function logged_in(logged_in) {
  return {
    type: types.PROBUDA_LOGGED_IN,
    logged_in
  }
}

export function addBudgetRow(description, amount, units, x, rate, total) {
  return {
    type: types.ADD_BUDGET_ROW,
    description, 
    amount, 
    units, 
    x, 
    rate,
    total
  }
}

export function deleteBudgetRow(id) {
  return { 
    type: types.DELETE_BUDGET_ROW,
    id
  }
}