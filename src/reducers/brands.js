import { combineReducers } from 'redux'
import { RECEIVE_BRANDS } from '../constants/ActionTypes';

const brands = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BRANDS:
    return [
      ...state,
      ...action.brands
    ]
    default:
      return state;
  }
}

const brandById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BRANDS:
      return {
        ...state,
        ...action.brands.reduce((obj, brand) => {
          obj[brand.id] = brand;
          return obj;
        }, {})
      };
    default:
      return state;
  }
}

export default combineReducers({
  brands,
  brandById
});

export const getBrand = (state, id) => state.brandById[id];