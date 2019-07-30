import React from 'react';
import { Columns, Column } from 'bloomer';

import SideNav from '../SideNav';
import Header from '../Header';

import './index.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header title="Pokémon" subtitle="Fav your pocket monsters" />
      <Columns isCentered>
        <Column isSize="1/4">
          <SideNav />
        </Column>
        <Column>
          <Column>{children}</Column>
        </Column>
      </Columns>
    </React.Fragment>
  );
};

export default Layout;
