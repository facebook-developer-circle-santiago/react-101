import React, { Component } from 'react'

import SoccerAxios from '../../utils/SoccerAxios'
import Loading from '../Loading'

export default class Teams extends Component {
  state = {
    teams: [],
    loading: true
  }

  componentDidMount() {
    this.fetchTeams()
  }

  renderTeams() {
    if (this.state.loading) {
      return <Loading />
    }

    return this.state.teams.map(team => {
      return (
        <div key={team.shortName} className='team'>
          <span className='name'>{team.name}</span>
          <span className='short-name'>{team.shortName}</span>
          <span className='market-value'>{team.squadMarketValue}</span>
          <span className='logo'><img src={team.crestUrl} /></span>
        </div>
      )
    })
  }

  render() {
    return(
      <div className='team-list'>
        {this.renderTeams()}
      </div>
    )
  }

  fetchTeams() {
    const { id } = this.props.match.params

    SoccerAxios.get(`/competitions/${id}/teams`)
     .then(response => {
       this.setState({ teams: response.data.teams, loading: false })
     })
     .catch(error => {
       this.setState({ teams: [], loading: false })
     })
  }
}
