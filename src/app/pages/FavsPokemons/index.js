import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardImage,
  Image,
  Media,
  MediaContent,
  Title,
  Subtitle,
  Columns,
  Column
} from 'bloomer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import './index.css';

class FavsPokemons extends Component {
  state = {
    pokemonsGroups: _.chunk(this.props.favsPokemons, 4)
  };

  render() {
    const { pokemonsGroups } = this.state;

    return (
      <div className="favs-pokemons-container">
        {pokemonsGroups.map((pokemonsGroup, index) => (
          <Columns key={index} isCentered>
            {pokemonsGroup.map((pokemon, index) => (
              <Column key={index} isSize="1/4">
                <Card>
                  <CardImage>
                    <Image
                      isSize="64x64"
                      src={pokemon.gif}
                    />
                  </CardImage>
                  <CardContent>
                    <Media>
                      <MediaContent>
                        <Title isSize={4}>{pokemon.name}</Title>
                        <Subtitle isSize={6}>Weight {pokemon.weight}</Subtitle>
                      </MediaContent>
                    </Media>
                  </CardContent>
                </Card>
              </Column>
            ))}
          </Columns>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons }) => ({ ...pokemons });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavsPokemons);
