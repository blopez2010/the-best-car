import React from 'react'
import PropTypes from 'prop-types'

import { Table, Image } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const CarsList = ({ cars }) => (<Table striped bordered condensed hover responsive>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Model</th>
      <th>Year</th>
      <th>Brand</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {cars.map(car =>
      <tr key={car.id}>
        <td width={"20%"}><Image src={car.img} thumbnail /></td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.brand}</td>
        <td><NumberFormat value={car.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
      </tr>
    )}
  </tbody>
</Table>)

export default CarsList;