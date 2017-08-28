import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import { getSelectCount, getAllCars } from '../actions';

import CompareCarItem from '../components/CompareCarItem';

const CarCompareContainer = ({ cars, selectedCount }) => (
  <div>
    <Row>
      {cars.filter(c => c.selected).map(car =>
        <Col xs={selectedCount % 3 === 0 ? 4 : 6}>
          <CompareCarItem car={car} />
        </Col>
      )}
    </Row>
    <Row>
      <br />
      <Link className="btn btn-info" role="button" to="/">Go Back</Link>
    </Row>
  </div>
)

CarCompareContainer.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  selectedCount: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  cars: getAllCars(state),
  selectedCount: getSelectCount(state)
});

export default connect(
  mapStateToProps
)(CarCompareContainer);