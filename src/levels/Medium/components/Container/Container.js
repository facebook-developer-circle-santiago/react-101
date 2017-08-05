import React, { Component } from 'react'
import PokemonAxios from '../../utils/PokemonAxios'
import Loading from '../Loading'
import Pokemon from '../Pokemon'

export default class Container extends Component {
  state = {
    pokemon_name: '',
    loading: false,
    pokemon: {
      name: '',
      sprites: {},
      types: []
    }
  }

  requestPokemon = (event) => {
    if (this.state.pokemon_name == '') {
      return
    }

    this.setState({ loading: true })

    PokemonAxios.get(`pokemon/${this.state.pokemon_name.toLowerCase()}`)
      .then((response) => {
        this.setState({ pokemon: response.data, loading: false })
      })
      .catch((error) => {
        this.setState({ pokemon: {
          name: '',
          sprites: {},
          types: []
        }, loading: false })
      });
  }

  changePokemonName = (event) => {
    const pokemon_name = event.target.value
    this.setState({ pokemon_name: event.target.value })
  }

  renderLoading() {
    return <Loading />
  }

  renderEmpty() {
    return (
      <div className='no-result'>
        <h3>
          No hay resultados
        </h3>
      </div>
    )
  }

  renderPokemon() {
    return(
      <Pokemon data={this.state.pokemon} />
    )
  }

  renderResult() {
    if (this.state.loading) {
      return this.renderLoading()
    }

    if (this.state.pokemon.name === '') {
      return this.renderEmpty()
    }

    return this.renderPokemon()
  }

  render() {
    return (
      <div className='pokemon-container'>
        <div className='search-form'>
          <input type='text'
                 placeholder='¿Qué pokemon quieres buscar?'
                 value={this.state.pokemon_name}
                 onChange={this.changePokemonName} />
          <button className='btn btn-success'
                  onClick={this.requestPokemon} >
            Buscar
          </button>
        </div>
        <div className='pokemon-result'>
          {this.renderResult()}
        </div>
      </div>
    )
  }
}
