import { RECEIVE_CARS } from '../constants/ActionTypes';

const byId = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CARS:
      return [
        ...state,
        ...action.cars
      ]
    default:
      return state;
  }
}

export default byId;