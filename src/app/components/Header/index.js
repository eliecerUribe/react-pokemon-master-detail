import React from 'react';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  HeroHeader,
  Columns,
  Column
} from 'bloomer';
import { NavLink } from 'react-router-dom';

import CustomNavbar from '../CustomNavbar';

import './index.css';

const Header = ({ title, subtitle }) => {
  return (
    <Hero isColor="primary" isSize="small">
      <HeroHeader isHidden="desktop">
        <CustomNavbar title={title} />
      </HeroHeader>
      <HeroBody isHidden="mobile">
        <Container isFluid>
          <Columns>
            <Column>
              <Title>{title}</Title>
              <Subtitle isHidden="mobile">{subtitle}</Subtitle>
            </Column>
            <Column hasTextAlign="right">
              <NavLink to="/favorites">Go to Fav Pokémons</NavLink>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default Header;
