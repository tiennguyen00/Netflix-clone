import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Route>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Route>
  );
}

export default App;
