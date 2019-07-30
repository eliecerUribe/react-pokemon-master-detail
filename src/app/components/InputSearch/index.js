import React, { Component } from 'react';
import { Control, Input, Button, Field } from 'bloomer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPokemon } from '../../redux/module/pokemon';

class InputSearch extends Component {
  state = {
    pokemonId: ''
  };

  handleOnChange = e => {
    this.setState({
      pokemonId: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.props.fetchPokemon(this.state.pokemonId);
    }
  }

  searchPokemon = async e => {
    e.preventDefault();

    this.props.fetchPokemon(this.state.pokemonId);
  };

  render() {
    const { pokemonId } = this.state;
    return (
      <Field hasAddons>
        <Control>
          <Input
            autoFocus
            placeholder="Name or ID of your Pokémon"
            value={pokemonId}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
          />
        </Control>
        <Control>
          <Button onClick={this.searchPokemon}>Search</Button>
        </Control>
      </Field>
    );
  }
}

const mapStateToProps = ({ pokemons }) => ({ ...pokemons });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPokemon }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSearch);
