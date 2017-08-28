import React from 'react'
import PropTypes from 'prop-types'
import Car from './Car';

const CarListItem = ({ car, isDisabled = false, onToggleSelect }) => (
  <Car car={car} isDisabled={isDisabled} onToggleSelect={onToggleSelect} />
)

CarListItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  isDisabled: PropTypes.bool,
  onToggleSelect: PropTypes.func.isRequired
}

export default CarListItem;