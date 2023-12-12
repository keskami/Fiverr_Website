import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css'; // Create App.css for styling

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <NavLink to="/" exact activeClassName="active-tab">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-tab">
            About Me
          </NavLink>
        </nav>
        <Switch>
          <Route path="/about" component={AboutMePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
