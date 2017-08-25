import React from 'react'
import CarContainer from './CarContainer';
import { Row, Col } from 'react-bootstrap';

const App = () => (
  <div>
    <div className="App-header">
      <h2>The Best Bet</h2>
    </div>
    <p className="App-intro">
      <Row>
        <Col xs={12}>
          <CarContainer></CarContainer>
        </Col>
      </Row>
    </p>
  </div>
)

export default App
