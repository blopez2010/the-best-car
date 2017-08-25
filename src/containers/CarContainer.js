import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllCars } from '../reducers';

const CarContainer = ({cars}) => (
  <div>
    {cars}
  </div>
)

const mapStateToProps = (state) => ({
  cars: getAllCars(state)
});

export default connect(
  mapStateToProps,
  {}
)(CarContainer);