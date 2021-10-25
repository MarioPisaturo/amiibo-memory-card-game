import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './index.scss';

import HomepageScreen from './screens/homepage/homepage';
import GameBoardScreen from './screens/gameboard/gameboard-screen';
import CompletionScreen from './screens/game-completion/completion-screen';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gameboard">Gameboard</Link>
            </li>
            <li>
              <Link to="/completion">Completion</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <HomepageScreen />
          </Route>
          <Route path="/gameboard">
            <GameBoardScreen />
          </Route>
          <Route path="/completion">
            <CompletionScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
