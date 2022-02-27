import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { ROUTE } from './constants';
import HomePage from './containers/HomePage';
import TradePage from './containers/TradePage';
import styles from './styles.module.scss';

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route exact path={ROUTE.HOME_PAGE}>
            <HomePage />
          </Route>
          <Route exact path={ROUTE.TRADE_PAGE}>
            <TradePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
