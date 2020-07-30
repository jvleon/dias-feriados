import {
  GET_DATA,
  DEACTIVE_LOADING,
  ACTIVE_LOADING
} from '../actionTypes';

const initialState = {
  data: [],
  loading: false,
};

const Days = (state = initialState, { payload, type }) => {
  switch(type) {
    case GET_DATA:
      return {
        ...state,
        data: [...payload]
      };
    case ACTIVE_LOADING:
      return {
        ...state,
        loading: true
      };
    case DEACTIVE_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  };
};

export default Days;
