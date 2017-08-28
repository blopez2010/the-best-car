import { combineReducers } from 'redux';
import carsReducer from './cars';
import brands, * as fromBrands from './brands';
import models, * as fromModels from './models';
import { BRAND_FILTER_LABEL } from '../constants/ActionTypes';

export default combineReducers({
  carsReducer,
  brands,
  models
});

export const getBrandById = (state, id) => fromBrands.getBrand(state.brands, id);
export const getModelById = (state, id) => fromModels.getModel(state.models, id);

export const buildCarInfo = (state, car) => {
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

export const getAllCars = (state) =>
  sortByBrand(state.carsReducer.cars.map(car => {
    return buildCarInfo(state, car)
  })).filter(car =>
    state.carsReducer.carFilter !== BRAND_FILTER_LABEL ?
      car.brand.toLowerCase().indexOf(state.carsReducer.carFilter.toLowerCase()) !== -1 :
      true)

export const getSelectCount = state =>
  state.carsReducer.cars.filter((car) => car.selected).length;