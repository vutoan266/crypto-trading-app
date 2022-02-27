import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { ROUTE } from './constants';
import HomePage from './containers/HomePage';
import TradePage from './containers/TradePage';
import styles from './styles.module.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
