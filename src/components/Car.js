import React from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';
import { Checkbox, Image, Button } from 'react-bootstrap';

const Car = ({ car, isDetail = false, isDisabled = false, onToggleSelect, onItemClick }) => (
  <tr key={car.id}>
    {!isDetail ? <td width={"10%"}><Button bsStyle="info" onClick={onItemClick}>View Details</Button></td> : null}
    {!isDetail ? <td width={"10%"}><Checkbox disabled={isDisabled && !car.selected} onChange={onToggleSelect}/></td> : null}
    {!isDetail ? <td width={"20%"}><Image src={car.img} thumbnail /></td> : null}
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.brand}</td>
    <td><NumberFormat value={car.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
  </tr>
);

Car.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  isDetail: PropTypes.bool,
  onToggleSelect: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default Car;
// ,
// type: PropTypes.string,
// displacement: PropTypes.string,
// horsepower: PropTypes.string,
// torque: PropTypes.string,
// transmission: PropTypes.string