import Axios from 'axios'

const PokemonAxios = Axios.create({
  baseURL: 'http://pokeapi.co/api/v2/',
  timeout: 10000
})

export default PokemonAxios
