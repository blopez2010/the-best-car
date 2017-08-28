import React from 'react'
import PropTypes from 'prop-types';

import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CarDetailsItem from './CarDetailsItem';

const CarDetails = ({ car }) => (
  <div>
    <Row>
      <Col xs={3}>
        <Image src={car.img} thumbnail height={170} weight={270} />
      </Col>
      <Col xs={9}>
        <CarDetailsItem car={car} />
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