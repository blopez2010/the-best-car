import cars from '../api';
import * as types from '../constants/ActionTypes';
import { getModelById, getBrandById } from '../reducers';
import { BRAND_FILTER_LABEL } from '../constants/ActionTypes';

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

const receiveModels = models => ({
  type: types.RECEIVE_MODELS,
  models: models
});

const receiveBrands = brands => ({
  type: types.RECEIVE_BRANDS,
  brands: brands
});

const receiveCars = cars => ({
  type: types.RECEIVE_CARS,
  cars: cars
});

export const loadAllData = () => dispatch => {
  cars.getData(result => {
    dispatch(receiveModels(result.models));
    dispatch(receiveBrands(result.brands));
    dispatch(receiveCars(result.cars));
  });
}

export const toggleSelect = (id) => ({
  type: types.TOGGLE_SELECT_CAR,
  id
});

export const setBrandFilter = filter => ({
  type: types.SET_BRAND_FILTER,
  filter
})

export const getCarById = id => (dispatch, getState) => {
  // eslint-disable-next-line
  return getState().carsReducer.cars.map(car => buildCarInfo(getState(), car)).find(car => car.id == id)
};

const brandFilter = (state, car) => (
  state.carsReducer.carFilter !== BRAND_FILTER_LABEL ?
    car.brand.toLowerCase().indexOf(state.carsReducer.carFilter.toLowerCase()) !== -1 :
    true
)

export const getSelectCount = state =>
  sortByBrand(state.carsReducer.cars.map(car => buildCarInfo(state, car)))
    .filter((car) => car.selected).length;

export const getAllCars = (state) =>
  sortByBrand(state.carsReducer.cars.map(car => buildCarInfo(state, car)))
    .filter(car => brandFilter(state, car))