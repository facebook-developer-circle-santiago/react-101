import axios from 'axios'

const PokemonAxios = axios.create({
  baseURL: 'http://pokeapi.co/api/v2/',
  timeout: 10000
})

export default PokemonAxios
