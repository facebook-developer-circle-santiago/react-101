import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SoccerAxios from '../../utils/SoccerAxios'
import Loading from '../Loading'

export default class Competitions extends Component {
  state = {
    competitions: [],
    loading: true
  }

  componentDidMount() {
    this.fetchCompetitions()
  }

  renderCompetitions() {
    if (this.state.loading) {
      return <Loading />
    }

    return this.state.competitions.map(competition => {
      return (
        <div key={competition.id} className='competition'>
          <span className='name'>{competition.caption}</span>
          <span className='league'>{competition.league}</span>
          <Link to={`/competition/${competition.id}/teams`}><span className='teams'>Ver {competition.numberOfTeams} equipos.</span></Link>
        </div>
      )
    })
  }

  render() {
    return(
      <div className='competition-list'>
        {this.renderCompetitions()}
      </div>
    )
  }

  fetchCompetitions() {
    SoccerAxios.get('competitions/?season=2017')
     .then(response => {
       this.setState({ competitions: response.data, loading: false })
     })
     .catch(error => {
       this.setState({ competitions: [], loading: false })
     })
  }
}
