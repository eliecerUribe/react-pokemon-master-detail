import React, { Component } from 'react';
import { Title, Button, Columns, Column, Field, Control } from 'bloomer';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { capitalizeString } from '../../utils';
import { favPokemon } from '../../redux/module/pokemon';

import loading from '../../assets/images/loading.gif';
import './index.css';

const URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon';
const URL_PLAY = 'http://play.pokemonshowdown.com/sprites/xyani'

class PokemonDetail extends Component {
  state = {
    id: '',
    name: '',
    frontShinyImg: '',
    backShinyImg: '',
    frontDefaultImg: '',
    backDefaultImg: '',
    description: '',
    weight: '',
    gif: '',
    isLoading: false
  };

  getPokemon = async name => {
    const {
      data: { id, sprites, species, weight }
    } = await axios.get(`${URL_POKEAPI}/${name}`);

    const specie = await axios.get(`${species.url}`);
    const description = specie.data.flavor_text_entries.filter(
      flavor => flavor.language.name === 'en'
    );

    const gif = `${URL_PLAY}/${name}.gif`

    this.setState({
      id,
      weight,
      gif,
      name: capitalizeString(name),
      frontShinyImg: sprites.front_shiny,
      backShinyImg: sprites.back_shiny,
      frontDefaultImg: sprites.front_default,
      backDefaultImg: sprites.back_default,
      description: description.length && description[0].flavor_text
    });

    this.setState({ isLoading: false });
  };

  favPokemon = () => {
    this.props.favPokemon(this.state);
  }

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;

    this.setState({ isLoading: true });
    this.getPokemon(params.name);
  };

  componentDidUpdate({ location: { pathname } }) {
    if (this.props.location.pathname !== pathname) {
      const {
        match: { params }
      } = this.props;

      this.setState({ isLoading: true });
      setTimeout(() => {
        this.getPokemon(params.name);
      }, 500);
    }
  }

  render() {
    const {
      name,
      frontShinyImg,
      backShinyImg,
      frontDefaultImg,
      backDefaultImg,
      description,
      isLoading
    } = this.state;
    return (
      <div>
        {isLoading && (
          <span className="spinner">
            <img src={loading} alt="spinner" />
            Loading...
          </span>
        )}
        {!isLoading && (
          <span>
            <Columns>
              <Column hasTextAlign="left">
                <Title isSize={1}>{capitalizeString(name)}</Title>
              </Column>
              <Column hasTextAlign="right">
                <Field isGrouped>
                  <Control>
                    <Button
                      isColor="primary"
                      onClick={this.favPokemon}
                    >Add</Button>
                  </Control>
                  <Control>
                    <Button>Remove</Button>
                  </Control>
                </Field>
              </Column>
            </Columns>
            <span>
              <img src={frontShinyImg} alt={name} />
            </span>
            <span>
              <img src={backShinyImg} alt={name} />
            </span>
            <span>
              <img src={frontDefaultImg} alt={name} />
            </span>
            <span>
              <img src={backDefaultImg} alt={name} />
            </span>
            <p>{description}</p>
          </span>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons }) => ({ ...pokemons });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ favPokemon }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
