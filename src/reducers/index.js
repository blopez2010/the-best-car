import { combineReducers } from 'redux';
import * as carById from './cars';
import * as brandById from './brands';
import { byId as modelById, getModel } from './models';

export default combineReducers({
  brands: brandById,
  cars: carById,
  models: modelById
});

export const getBrand = (id) => brandById[id];
export const getModelById = (state, id) => getModel(state.models, id);
export const getCar = (id) => carById[id];

const buildCarInfo = (state, car) => {
  return {
    ...car,
    model: getModelById(state, car.modelId).description,
    brand: getBrand(car.brandId).description
  }
};

export const getAllCars = state =>
  state.cars.map(car => {
    return buildCarInfo(state, car)
  })
// export const getCarByModelName = () =>
