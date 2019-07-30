import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PokemonDetail from './pages/PokemonDetail';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/pokemon/:name" component={PokemonDetail} />
      </Switch>
    </Layout>
  );
};

export default App;
