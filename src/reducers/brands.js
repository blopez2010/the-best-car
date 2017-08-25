import { RECEIVE_BRANDS } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BRANDS:
    return {
      ...state,
      ...action.brands.reduce((obj, brand) => {
        obj[brand.id] = brand;
        return obj;
      }, {})
    }
    default:
      return state;
  }
}

export default byId;