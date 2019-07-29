import React from 'react';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  HeroHeader
} from 'bloomer';

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
          <Title>{title}</Title>
          <Subtitle isHidden="mobile">{subtitle}</Subtitle>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default Header;
