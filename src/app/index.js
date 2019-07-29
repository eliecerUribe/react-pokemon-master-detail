import React from 'react';
import { Route, Switch } from 'react-router-dom';

import User from './pages/User';
import List from './pages/List';
import Home from './pages/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={User} />
        <Route path="/lists" component={List} />
      </Switch>
    </Layout>
  );
};

export default App;
