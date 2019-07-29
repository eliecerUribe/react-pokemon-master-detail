import React from 'react';
import {
  Navbar,
  NavbarMenu,
  NavbarStart,
  NavbarItem,
  NavbarBurger,
  NavbarBrand
} from 'bloomer';

import useOpen from '../../customHooks/useOpen';
import CustomNavbarItem from './CustomNavbarItem';

const CustomNavbar = ({ title }) => {
  const { isOpen, toggle } = useOpen();

  return (
    <Navbar>
      <NavbarBrand>
        <NavbarItem>{title}</NavbarItem>
        <NavbarBurger isActive={isOpen} onClick={toggle} />
      </NavbarBrand>
      <NavbarMenu isActive={isOpen} onClick={toggle}>
        <NavbarStart>
          <CustomNavbarItem path="/home" icon="home" title="Home" />
          <CustomNavbarItem path="/users" icon="user" title="Users" />
          <CustomNavbarItem path="/lists" icon="list" title="Lists" />
        </NavbarStart>
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;
