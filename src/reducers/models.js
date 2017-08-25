import { combineReducers } from 'redux'
import { RECEIVE_MODELS } from '../constants/ActionTypes';

const models = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MODELS:
      return [
        ...state,
        ...action.models
      ]
    default:
      return state;
  }
};

const modelById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MODELS:
      return {
        ...state,
        ...action.models.reduce((obj, model) => {
          obj[model.id] = model;
          return obj;
        }, {})
      }
    default:
      return state;
  }
}

export default combineReducers({
  models,
  modelById
})

export const getModel = (state, id) => state.modelById[id];

// const modelName = (state = [], action) => {
//   switch (action.type) {
//     case RECEIVE_MODELS:
//       return action.models.map(model => model.description);
//     default:
//       return state;
//   }
// }

// export default byId;
// export default combineReducers({
//   byId,
//   modelName
// });