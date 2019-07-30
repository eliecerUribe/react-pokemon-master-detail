import React, { Component } from 'react';
import { Title } from 'bloomer';
import axios from 'axios';

import { capitalizeString } from '../../utils';

const URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon';

class PokemonDetail extends Component {
  state = {
    id: '',
    name: '',
    frontShinyImg: '',
    backShinyImg: '',
    frontDefaultImg: '',
    backDefaultImg: '',
    description: '',
    isLoading: false
  };

  getPokemon = async name => {
    const {
      data: { id, sprites, species }
    } = await axios.get(`${URL_POKEAPI}/${name}`);
   
    const specie = await axios.get(`${species.url}`);
    const description = specie.data.flavor_text_entries.filter((flavor) => flavor.language.name === 'en');
    
    this.setState({
      id,
      name,
      frontShinyImg: sprites.front_shiny,
      backShinyImg: sprites.back_shiny,
      frontDefaultImg: sprites.front_default,
      backDefaultImg: sprites.back_default,
      description: description.length && description[0].flavor_text
    });

    this.setState({ isLoading: false });
  };

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;

    this.setState({ isLoading: true });
    this.getPokemon(params.name);
  };

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
        <Title isSize={1}>{capitalizeString(name)}</Title>
        {isLoading && <h1>Loading...</h1>}
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
      </div>
    );
  }
}

export default PokemonDetail;
