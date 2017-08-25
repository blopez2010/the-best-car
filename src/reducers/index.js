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
  return {
    ...car,
    model: getModelById(state, car.modelId).description || '',
    brand: getBrandById(state, car.brandId).description || ''
  }
};

const sortByBrand = (state) =>
  state.sort((a, b) => {
    if (a.brand < b.brand) return -1;
    if (a.brand > b.brand) return 1;
    return 0;
  });

export const getAllCars = state =>
  sortByBrand(state.cars.map(car => {
    return buildCarInfo(state, car)
  }))

  export const getSelectCount = state =>
  state.cars.filter((car) => car.selected).length;