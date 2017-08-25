import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllCars } from '../reducers';

import CarsList from '../components/CarsList';

const CarContainer = ({ cars }) => (
  <CarsList cars={cars} />
)

const mapStateToProps = (state) => ({
  cars: getAllCars(state)
});

export default connect(
  mapStateToProps,
  {}
)(CarContainer);