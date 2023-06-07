import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ShowDetails from './ShowDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/show/:id" component={ShowDetails} />
      </Switch>
    </Router>
  );
}

export default App;
