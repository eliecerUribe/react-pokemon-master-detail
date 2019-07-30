import React, { Component } from 'react';
import {
  Navbar,
  NavbarMenu,
  NavbarStart,
  NavbarItem,
  NavbarBurger,
  NavbarBrand
} from 'bloomer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomNavbarItem from './CustomNavbarItem';
import { fetchPokemons } from '../../redux/module/pokemon';
import { capitalizeString } from '../../utils';

class CustomNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isLoading, error, pokemons, foundPokemon, title } = this.props;
    const { isOpen } = this.state;

    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem>{title}</NavbarItem>
          <NavbarBurger isActive={isOpen} onClick={this.toggle} />
        </NavbarBrand>
        <NavbarMenu isActive={isOpen} onClick={this.toggle}>
          <NavbarStart>
            {!isLoading &&
            !error &&
            foundPokemon &&
            foundPokemon.hasOwnProperty('id') ? (
              <CustomNavbarItem
                path={'/pokemon/' + foundPokemon.name}
                title={capitalizeString(foundPokemon.name)}
              />
            ) : (
              pokemons.map((pokemon, index) => (
                <CustomNavbarItem
                  key={index}
                  path={'/pokemon/' + pokemon.name}
                  title={capitalizeString(pokemon.name)}
                />
              ))
            )}
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ pokemons }) => ({ ...pokemons });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPokemons }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNavbar);
