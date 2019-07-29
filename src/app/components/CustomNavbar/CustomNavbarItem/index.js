import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarItem } from 'bloomer';

const CustomNavbarItem = ({ path, icon, title }) => {
  return (
    <NavbarItem>
      <NavLink activeClassName="selected" to={path}>
        <FontAwesomeIcon icon={icon} />
        <span className="side-nav-item">{title}</span>
      </NavLink>
    </NavbarItem>
  );
};

export default CustomNavbarItem;
