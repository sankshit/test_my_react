import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { SingleCardTestContainer } from './TestComponents/SingleCardTestContainer';
import { TestLander } from './Components/TestLander';
import VendorAdvanceContractAdd from './TestComponents/FormTest';


export const history = createBrowserHistory();



function App() {
  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={TestLander} />
          <Route exact path="/singleCardTest" component={SingleCardTestContainer} />
          <Route exact path="/virtualListTest" component={VendorAdvanceContractAdd} />
        </Switch>
      </Router>
  );
}

export default App;
