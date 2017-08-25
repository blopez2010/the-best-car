import _brands from './brands.json';
import _cars from './cars.json';
import _models from './models.json';

const TIMEOUT = 100;

export default {
  getBrands: (cb, timeout) => setTimeout(() => cb(_brands), timeout || TIMEOUT),
  getCars: (cb, timeout) => setTimeout(() => cb(_cars), timeout || TIMEOUT),
  getModels: (cb, timeout) => setTimeout(() => cb(_models), timeout || TIMEOUT)
}