import React, { Component } from 'react';
import { Menu, MenuList, MenuLink, MenuLabel } from 'bloomer';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPokemons } from '../../redux/module/pokemon';
import { capitalizeString } from '../../utils';
import InputSearch from '../InputSearch';

import './index.css';
class SideNav extends Component {
  componentDidMount = () => {
    this.props.fetchPokemons();
  };
  
  render() {
    const { isLoading, error, pokemons, foundPokemon } = this.props;

    return (
      <Menu isHidden="mobile">
        <MenuList>
          <InputSearch />
          <MenuLabel>Top 10 Pokémons</MenuLabel>
          {isLoading && <h1>Loading pokémons</h1>}
          {error && <h1>{error}</h1>}
          {(!isLoading && !error && foundPokemon && foundPokemon.hasOwnProperty('id')) ? (
            <li>
              <MenuLink
                render={props => (
                  <NavLink
                    {...props}
                    activeClassName="selected"
                    to={'/pokemon/' + foundPokemon.name}
                  >
                    <span className="side-nav-item">
                      {capitalizeString(foundPokemon.name)}
                    </span>
                  </NavLink>
                )}
              />
            </li>
          ) : (
            pokemons.map((pokemon, index) => (
              <li key={index}>
                <MenuLink
                  render={props => (
                    <NavLink
                      {...props}
                      activeClassName="selected"
                      to={'/pokemon/' + pokemon.name}
                    >
                      <span className="side-nav-item">
                        {capitalizeString(pokemon.name)}
                      </span>
                    </NavLink>
                  )}
                />
              </li>
            ))
          )}
        </MenuList>
      </Menu>
    );
  }
}

const mapStateToProps = ({ pokemons }) => ({ ...pokemons });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPokemons }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);
