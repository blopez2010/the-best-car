import React from 'react'
import PropTypes from 'prop-types'
import Car from './Car';

const CarListItem = ({ car, isDisabled = false, onToggleSelect, onItemClick }) => (
  <Car car={car} isDetail={false} isDisabled={isDisabled} onToggleSelect={onToggleSelect} onItemClick={onItemClick} />
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
  isDisable: PropTypes.bool,
  onToggleSelect: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default CarListItem;