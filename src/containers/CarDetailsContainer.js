import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCarById } from '../actions';
import { getAllCars } from '../reducers';

import CarDetails from '../components/CarDetails';

const CarDetailsContainer = ({ match: { params: { id } }, getCarById }) => (
  <div>
    <h1>Car details</h1>
    <div>
      <CarDetails car={getCarById(id)} />
    </div>
  </div>
)

CarDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  }),
  getCarById: PropTypes.func
}

const mapStateToProps = (state) => ({
  cars: getAllCars(state)
})

export default connect(
  mapStateToProps,
  { getCarById }
)(CarDetailsContainer)