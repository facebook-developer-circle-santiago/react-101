import React, { Component } from 'react'

export default class Pokemon extends Component {
  render() {
    return (
      <div className='pokemon'>
        <div className='image'>
          <img src={this.props.data.sprites.front_default} />
        </div>
        <span className='name'>{this.props.data.name.toUpperCase()}</span>
        <span className='pokedex-number'>{this.props.data.id}</span>
        <div className='types'>
          {this.renderTypes()}
        </div>
      </div>
    )
  }

  renderTypes() {
    return this.props.data.types.map(type => {
      return (
        <div key={type.slot} className='type'>
          {type.type.name}
        </div>
      )
    })
  }
}
