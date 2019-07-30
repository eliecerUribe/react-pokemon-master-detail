import React, { Component } from 'react';
import {
  Menu,
  MenuList,
  MenuLink,
  Control,
  Input,
  Button,
  Field,
  MenuLabel
} from 'bloomer';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPokemons } from '../../redux/module/pokemon';
import {capitalizeString} from '../../utils';

import './index.css';
class SideNav extends Component {
  componentDidMount = () => {
    this.props.fetchPokemons();
  };

  render() {
    const { isLoading, error, pokemons } = this.props;

    return (
      <Menu isHidden="mobile">
        <MenuList>
          <Field hasAddons>
            <Control>
              <Input placeholder="Name or ID of your Pokémon" />
            </Control>
            <Control>
              <Button>Search</Button>
            </Control>
          </Field>
          <MenuLabel>Top 10 Pokémons</MenuLabel>
          {isLoading && <h1>Loading pokémons</h1>}
          {error && <h1>{error}</h1>}
          {!isLoading &&
            !error &&
            pokemons.map((pokemon, index) => (
              <li key={index}>
                <MenuLink
                  render={props => (
                    <NavLink {...props} activeClassName="selected" to={'/pokemon/' + pokemon.name}>
                      <span className="side-nav-item">{capitalizeString(pokemon.name)}</span>
                    </NavLink>
                  )}
                />
              </li>
            ))}
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
