import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import { getAllCars, getSelectCount } from '../reducers';

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

const mapStateToProps = state => ({
  cars: getAllCars(state),
  selectedCount: getSelectCount(state)
});

export default connect(
  mapStateToProps
)(CarCompareContainer);