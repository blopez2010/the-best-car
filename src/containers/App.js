import React from 'react'
import CarContainer from './CarContainer';
import CarDetailsContainer from './CarDetailsContainer';
import CarCompareContainer from './CarCompareContainer';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <div className="App-header">
      <h2>The Best Bet</h2>
    </div>
    <div className="App-intro">
      {children}
    </div>
  </div>
)

const App = () => (
  <Router>
    <Layout>
      <Route exact path='/' component={CarContainer} />
      <Route path='/details/:id' component={CarDetailsContainer} />
      <Route path='/compare/' component={CarCompareContainer}/>
    </Layout>
  </Router>

)

export default App
