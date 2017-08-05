import React, { Component } from 'react'
import PokemonAxios from '../PokemonAxios'

export default class Pokemon extends Component {
  state = {
    loading: true,
    failed: false,
    data: {},
  }

  componentDidMount() {
    console.log('Acá deberiamos llamar al API')
    PokemonAxios.get(`/pokemon/${this.props.number}`)
      .then(response => {
        this.setState({
          loading: false,
          data: response.data,
          failed: false
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          failed: true
        })
      })
  }

  renderLoading() {
    return <h1>Estamos cargando...</h1>
  }

  renderExplosion() {
    return <h1>WTF!!!</h1>
  }

  renderPokemon() {
    return (
      <div className='pokemon'>
        <img src={this.state.data.sprites.front_default} />
        <span className='name'>{this.state.data.name}</span>
      </div>
    )
  }

  render() {
    // GUARD CLAUSE
    if (this.state.loading) {
      return this.renderLoading()
    }

    if (this.state.failed) {
      return this.renderExplosion()
    }

    return this.renderPokemon()
  }
}
