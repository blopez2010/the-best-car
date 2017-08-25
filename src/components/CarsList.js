import React from 'react'
import PropTypes from 'prop-types'

import { Table, Row } from 'react-bootstrap';

const CarList = ({ children }) => (
  <div className="padding-top-20">
    <Row>
      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Select</th>
            <th>Picture</th>
            <th>Model</th>
            <th>Year</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Table>
    </Row>
  </div>)

CarList.propTypes = {
  children: PropTypes.node
}

export default CarList;