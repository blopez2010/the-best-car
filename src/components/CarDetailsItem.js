import React from 'react'
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';
import { Image, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarDetailsItem = ({ car }) => (
  <div>
    <Row>
      <Col xs={3}>Model:</Col>
      <Col xs={9}>{car.model}</Col>
    </Row>
    <Row>
      <Col xs={3}>Year:</Col>
      <Col xs={9}>{car.year}</Col>
    </Row>
    <Row>
      <Col xs={3}>Brand:</Col>
      <Col xs={9}>{car.brand}</Col>
    </Row>
    <Row>
      <Col xs={3}>Type:</Col>
      <Col xs={9}>{car.type}</Col>
    </Row>
    <Row>
      <Col xs={3}>Displacement:</Col>
      <Col xs={9}>{car.displacement}</Col>
    </Row>
    <Row>
      <Col xs={3}>Horsepower:</Col>
      <Col xs={9}>{car.horsepower}</Col>
    </Row>
    <Row>
      <Col xs={3}>Torque:</Col>
      <Col xs={9}>{car.torque}</Col>
    </Row>
    <Row>
      <Col xs={3}>Transmission:</Col>
      <Col xs={9}>{car.transmission}</Col>
    </Row>
    <Row>
      <Col xs={3}>Price:</Col>
      <Col xs={9}><NumberFormat value={car.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Col>
    </Row>
  </div>
)

CarDetailsItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default CarDetailsItem;