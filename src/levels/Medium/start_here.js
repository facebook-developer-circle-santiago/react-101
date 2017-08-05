state = {
  pokemon_name: '',
  loading: false,
  pokemon: {
    name: '',
    sprites: {},
    types: []
  }
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
        <div className='no-result'>
          <h3>
            No hemos encontrado ese pokemon =(
          </h3>
        </div>
        <div className='loading'>
          <h3>
            Buscando en la pokedex...
          </h3>
        </div>
        <div className='pokemon'>
          <div className='image'>
            <img src={this.state.pokemon.sprites.front_default} />
          </div>
          <span className='name'>{this.state.pokemon.name.toUpperCase()}</span>
          <span className='pokedex-number'>{this.state.pokemon.id}</span>
          <div className='types'>
            {this.renderTypes()}
          </div>
        </div>
      </div>
    </div>
  )
}
