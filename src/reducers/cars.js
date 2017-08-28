import { combineReducers } from 'redux';
import { RECEIVE_CARS, TOGGLE_SELECT_CAR, SET_BRAND_FILTER, BRAND_FILTER_LABEL } from '../constants/ActionTypes';

const car = (state, action) => {
  switch (action.type) {
    case TOGGLE_SELECT_CAR:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        selected: !state.selected
      }
    default:
      return state;
  }
}

const cars = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CARS:
      return [
        ...state,
        ...action.cars
      ]
    case TOGGLE_SELECT_CAR:
      return state.map(c => car(c, action));
    default:
      return state;
  }
}

const carFilter = (
  state = BRAND_FILTER_LABEL,
  action
) => {
  switch (action.type) {
    case SET_BRAND_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  cars,
  carFilter
});