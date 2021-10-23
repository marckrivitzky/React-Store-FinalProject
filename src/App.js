
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EnterPage from './EnterPage';
import Store from './Store';
import HomePage from './HomePage';
import IndicaVsSativa from './IndicaVsSativa';
import Quiz from './Quiz'
import UnderPage from './UnderPage';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path="/" exact>
            <EnterPage />
          </Route>
        
          <Route path="/UnderPage" exact>
            <UnderPage />
          </Route>


          <Route path="/HomePage" exact>
            <HomePage />
          </Route>

          <Route path="/Store" exact>
            <Store />
          </Route>
      
        <Route path="/IndicaVsSativa" exact>
            <IndicaVsSativa />
          </Route>

        <Route path="/quiz" exact>
            <Quiz />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;






	






