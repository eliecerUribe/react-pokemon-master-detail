import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItem } from 'bloomer';

const CustomNavbarItem = ({ path, title }) => {
  return (
    <NavbarItem>
      <NavLink activeClassName="selected" to={path}>
        <span className="side-nav-item">{title}</span>
      </NavLink>
    </NavbarItem>
  );
};

export default CustomNavbarItem;
