import cars from '../api';
import * as types from '../constants/ActionTypes';

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
  cars.getCars(cars => {
    dispatch(receiveCars(cars));
  });

  cars.getBrands(brands => {
    dispatch(receiveBrands(brands));
  });

  cars.getModels(models => {
    dispatch(receiveModels(models));
  });
}