import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from './templates/portfolio';
import Portfolio2 from './templates/portfolio_2';

const App = (props) => {

  console.log(props.appData);
  return (
      <div>
          <Router>
            <Route exact path="/portfolio" render={() => <Portfolio appData={props.appData} />} />
            <Route exact path="/portfolio2" render={() => <Portfolio2 appData={props.appData} />} />
          </Router>
      </div>
  );
};

// <Route exact path="/portfolio" appData={props.appData} component={Portfolio} />
// <Route exact path="/portfolio2" appData={props.appData} component={Portfolio2} />
export default App;
