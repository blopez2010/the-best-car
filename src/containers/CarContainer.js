import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllCars } from '../reducers';

import { Row, Col } from 'react-bootstrap';

import CarsList from '../components/CarsList';

const CarContainer = ({ cars }) => (
  <Row>
    <Col xs={12}>
      <CarsList cars={cars} />
    </Col>
  </Row>
)

const mapStateToProps = (state) => ({
  cars: getAllCars(state)
});

export default connect(
  mapStateToProps,
  {}
)(CarContainer);