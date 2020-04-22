import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import CountrySearch from '../CountrySearch/CountrySearch';
import CountryDetails from '../CountryDetails/CountryDetails';

function App() {
  return (
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
  );
}

export default App;
