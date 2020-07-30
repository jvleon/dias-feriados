import {
  GET_DATA,
  ACTIVE_LOADING,
  DEACTIVE_LOADING
} from '../actionTypes'

const API = process.env.API_BASE_URL || 'http://localhost:4000/api'

function getData (payload) {
  return {
    type: GET_DATA,
    payload
  }
};

function activeLoader () {
  return {
    type: ACTIVE_LOADING
  }
};

function deactiveLoader () {
  return {
    type: DEACTIVE_LOADING
  }
};

export const fetchData = () => dispatch => {
  dispatch(activeLoader());
  fetch(`${API}/days`)
    .then(response => response.json())
    .then(response => {
      dispatch(getData(response));
      dispatch(deactiveLoader());
    })
    .catch((error) => {
      console.log(error);
      dispatch(deactiveLoader());
    });
};

export const saveData = (data, id, callback) => dispatch => {
  const header = new Headers();
  header.append('Content-Type', 'application/json');
  dispatch(activeLoader());
  fetch(`${API}/days/${id}`, { method: 'PUT', body: JSON.stringify(data) , headers: header})
    .then(response => response.json())
    .then(response => {
      callback();
      dispatch(fetchData());
    })
    .catch((error) => {
      console.log(error);
      dispatch(deactiveLoader());
    });
};