import React from 'react';
import { Menu, MenuList, MenuLink } from 'bloomer';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

const SideNav = () => {
  return (
    <Menu isHidden="mobile">
      <MenuList>
        <li>
          <MenuLink
            render={props => (
              <NavLink {...props} activeClassName="selected" to="/home">
                <FontAwesomeIcon icon="home" />
                <span className="side-nav-item">Home</span>
              </NavLink>
            )}
          />
        </li>
        <li>
          <MenuLink
            render={props => (
              <NavLink {...props} activeClassName="selected" to="/users">
                <FontAwesomeIcon icon="user" />
                <span className="side-nav-item">Users</span>
              </NavLink>
            )}
          />
        </li>
        <li>
          <MenuLink
            render={props => (
              <NavLink {...props} activeClassName="selected" to="/lists">
                <FontAwesomeIcon icon="list" />
                <span className="side-nav-item">Lists</span>
              </NavLink>
            )}
          />
        </li>
      </MenuList>
    </Menu>
  );
};

export default SideNav;
