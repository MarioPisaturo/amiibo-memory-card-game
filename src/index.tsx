import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomepageScreen from './screens/homepage/homepage';
import GameBoardScreen from './screens/gameboard/gameboard-screen';
import CompletionScreen from './screens/game-completion/completion-screen';
import store from './redux/store';
import { fetchAmiibo } from './redux/amiibo-thunks';

import './index.scss';

store.dispatch(fetchAmiibo());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
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
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 *  <nav>
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
 */
