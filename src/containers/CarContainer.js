import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllCars, getSelectCount } from '../reducers';
import { toggleSelect } from '../actions';
import { Link } from 'react-router-dom';

import CarList from '../components/CarsList';
import CarListItem from '../components/CarListItem';

const CarContainer = ({ cars, selectedCount, toggleSelect }) => (
  <div>
    <Link className="btn btn-primary" role="button" disabled={selectedCount <= 1} to="/compare">Compare</Link>
    <CarList>
      {cars.map(car =>
        <CarListItem
          key={car.id}
          car={car}
          isDisabled={selectedCount === 3}
          onToggleSelect={() => toggleSelect(car.id)}
        />)}
    </CarList>
  </div>
)

CarListItem.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })),
  selectedCount: PropTypes.number,
  toggleSelect: PropTypes.func
}

const mapStateToProps = state => ({
  cars: getAllCars(state),
  selectedCount: getSelectCount(state)
});

export default connect(
  mapStateToProps,
  { toggleSelect }
)(CarContainer);