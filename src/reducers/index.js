import { combineReducers } from 'redux';
import carsReducer from './cars';
import brands, * as fromBrands from './brands';
import models, * as fromModels from './models';

export default combineReducers({
  carsReducer,
  brands,
  models
});

export const getBrandById = (state, id) => fromBrands.getBrand(state.brands, id);
export const getModelById = (state, id) => fromModels.getModel(state.models, id);