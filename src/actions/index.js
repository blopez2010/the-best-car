import cars from '../api';
import * as types from '../constants/ActionTypes';
import { buildCarInfo } from '../reducers';

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
})

export const getCarById = id => (dispatch, getState) =>
  getState().cars.map(car => buildCarInfo(getState(), car)).find(car => car.id == id);