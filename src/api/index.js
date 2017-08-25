import brands from './brands.json';
import cars from './cars.json';
import models from './models.json';

const TIMEOUT = 100;

export default {
  getData: (cb, timeout) => setTimeout(() => cb({
    brands,
    cars,
    models
  }), timeout || TIMEOUT)
}