import { RECEIVE_CARS, TOGGLE_SELECT_CAR } from '../constants/ActionTypes';

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

export default cars;