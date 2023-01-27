import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

import { SingleCardTestContainer } from './TestComponents/SingleCardTestContainer';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/singleCardTest" component={SingleCardTestContainer} />
        </Switch>
      </Router>
  );
}

export default App;
