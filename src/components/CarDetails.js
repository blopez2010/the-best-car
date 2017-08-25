import React from 'react'
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';
import { Image, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarDetails = ({ car }) => (
  <div>
    <Row>
      <Col xs={3}>
        <Image src={car.img} thumbnail height={200} />
      </Col>
      <Col xs={9}>
        <Row>
          <Col xs={2}>Model:</Col>
          <Col xs={10}>{car.model}</Col>
        </Row>
        <Row>
          <Col xs={2}>Year:</Col>
          <Col xs={10}>{car.year}</Col>
        </Row>
        <Row>
          <Col xs={2}>Brand:</Col>
          <Col xs={10}>{car.brand}</Col>
        </Row>
        <Row>
          <Col xs={2}>Type:</Col>
          <Col xs={10}>{car.type}</Col>
        </Row>
        <Row>
          <Col xs={2}>Displacement:</Col>
          <Col xs={10}>{car.displacement}</Col>
        </Row>
        <Row>
          <Col xs={2}>Horsepower:</Col>
          <Col xs={10}>{car.horsepower}</Col>
        </Row>
        <Row>
          <Col xs={2}>Torque:</Col>
          <Col xs={10}>{car.torque}</Col>
        </Row>
        <Row>
          <Col xs={2}>Transmission:</Col>
          <Col xs={10}>{car.transmission}</Col>
        </Row>
        <Row>
          <Col xs={2}>Price:</Col>
          <Col xs={10}>{car.price}</Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <br/>
      <Link className="btn btn-info" role="button" to="/">Go Back</Link>
    </Row>
  </div>
)

CarDetails.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default CarDetails;