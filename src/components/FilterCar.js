import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, InputGroup, Button, Glyphicon, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FilterCar = ({ selectedCount, filter, onFilter }) => (
  <Row>
    <Col xs={1}>
      <Link className="btn btn-primary" role="button" disabled={selectedCount <= 1} to="/compare">Compare</Link>
    </Col>
    <Col xs={7}>
      <Form horizontal componentClass="fieldset">
        <FormGroup>
          <Col componentClass={ControlLabel} xs={4}>
            Search by brand name:
        </Col>
          <Col xs={8}>
            <FormControl type="text" placeholder="Search by brand name" value={filter} onChange={onFilter} />
          </Col>
        </FormGroup>
      </Form>
    </Col>
  </Row>
)

export default FilterCar;