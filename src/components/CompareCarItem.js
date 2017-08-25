import React from 'react'
import PropTypes from 'prop-types';

import { Image, Row, Col, Table } from 'react-bootstrap';

import CarDetailsItem from './CarDetailsItem';

const CompareCarItem = ({ car }) => (
  <div>
    <Row>
      <Col colSpan="2">
        <Image src={car.img} thumbnail width="50%" heigh="50%" />
      </Col>
      <CarDetailsItem car={car} />
    </Row>
  </div>
)

CompareCarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default CompareCarItem;