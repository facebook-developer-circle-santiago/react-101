import React, { Component } from 'react'

import Pokemon from './Pokemon'

export default class Medium extends Component {
  state = {
    pokemon: ''
  }

  changeText = (event) => {
    this.setState({ pokemon: event.target.value })
  }

  renderPokemon() {
    if (!this.state.pokemon) {
      return
    }

    return <Pokemon number={this.state.pokemon}/>
  }

  render() {
    return (
      <div className='medium'>
        <input
          type='text'
          onChange={this.changeText}
          value={this.state.pokemon}
        />
        <button>
          Buscar
        </button>
        {this.renderPokemon()}
      </div>
    )
  }
}
