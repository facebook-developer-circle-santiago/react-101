import axios from 'axios'

const SoccerAxios = axios.create({
  baseURL: 'http://api.football-data.org/v1/',
  timeout: 10000
})

SoccerAxios.defaults.headers.common['X-Auth-Token'] = '8d1982e3676141b5b44f016b08b2a0e6'

export default SoccerAxios
