import _ from 'underscore'

/* globals document */

export default class BaseData {
  constructor() {
    this.defaultParams = {
      credentials: 'same-origin'
    }
  }

  getCSRFToken() {
    return _.find(document.getElementsByTagName("meta"), (meta) => {
      return meta.name === "csrf-token"
    }).content
  }

  defaultHeaders = () => {
    return {
      'X-CSRF-Token': this.getCSRFToken(),
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  }

  post = (url, props) => {
    return fetch(url, {
      method: 'post',
      headers: this.defaultHeaders(),
      body: JSON.stringify(props),
      ...this.defaultParams
    })
    .then((response) => {
      return response.json()
    })
  }

  put = (url, props) => {
    return fetch(url, {
      method: 'put',
      headers: this.defaultHeaders(),
      body: JSON.stringify(props),
      ...this.defaultParams
    })
    .then((response) => {
      return response.json()
    })
  }

  delete = (url) => {
    return fetch(url, {
      method: 'delete',
      headers: this.defaultHeaders(),
      ...this.defaultParams
    })
    .then((response) => {
      return response.json()
    })
  }
}