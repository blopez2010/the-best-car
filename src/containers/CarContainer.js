import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleSelect, setBrandFilter, getSelectCount, getAllCars } from '../actions';

import CarList from '../components/CarsList';
import CarListItem from '../components/CarListItem';
import FilterCar from '../components/FilterCar';

import { BRAND_FILTER_LABEL } from '../constants/ActionTypes';

import { Row } from 'react-bootstrap';

const CarContainer = ({
  cars,
  selectedCount,
  filter,
  toggleSelect,
  setBrandFilter
}) => (
    <div>
      <Row>
        <FilterCar
          filter={filter}
          selectedCount={selectedCount}
          onFilter={(obj) => setBrandFilter(obj.target.value)} />
      </Row>
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
  filter: PropTypes.string,
  toggleSelect: PropTypes.func,
  setBrandFilter: PropTypes.func
}

const mapStateToProps = state => ({
  cars: getAllCars(state),
  selectedCount: getSelectCount(state),
  filter: state.carsReducer.carFilter === BRAND_FILTER_LABEL ? '' : state.carsReducer.carFilter
});

export default connect(
  mapStateToProps,
  { toggleSelect, setBrandFilter }
)(CarContainer);