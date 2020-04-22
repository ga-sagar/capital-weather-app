import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import CountrySearch from '../CountrySearch/CountrySearch';
import CountryDetails from '../CountryDetails/CountryDetails';
import { store } from '../../store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={CountrySearch} />
          <Switch>
            <Route path="/country-details/:countryName" component={CountryDetails} />

            {/* if no path match found then redirect to country search screen */}
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
