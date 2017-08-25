import { combineReducers } from 'redux';
import cars from './cars';
import brands, * as fromBrands from './brands';
import models, * as fromModels from './models';

export default combineReducers({
  cars,
  brands,
  models
});

export const getBrandById = (state, id) => fromBrands.getBrand(state.brands, id);
export const getModelById = (state, id) => fromModels.getModel(state.models, id);
// export const getCar = (id) => carById[id];

const buildCarInfo = (state, car) => {
  const test= getBrandById(state, car.brandId);
  return {
    ...car,
    model: getModelById(state, car.modelId).description || '',
    brand: getBrandById(state, car.brandId).description || ''
  }
};

export const getAllCars = state =>
  state.cars.map(car => {
    return buildCarInfo(state, car)
  })
