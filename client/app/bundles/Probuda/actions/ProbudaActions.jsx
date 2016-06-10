import * as actionTypes from '../constants/ProbudaConstants'

export function updateName(name) {
  return {
    type: actionTypes.PROBUDA_NAME_UPDATE,
    name
  };
}

export function updateEmail(email) {
  return {
    type: actionTypes.PROBUDA_EMAIL_UPDATE,
    email
  };
}

export function updatePassword(password) {
  return {
    type: actionTypes.PROBUDA_PASSWORD_UPDATE,
    password
  };
}

export function updatePasswordConfirmation(password_confirmation) {
  return {
    type: actionTypes.PROBUDA_PASSWORD_CONFIRMATION_UPDATE,
    password_confirmation
  };
}

export function logged_in(logged_in) {
  return {
    type: actionTypes.PROBUDA_LOGGED_IN,
    logged_in
  }
}