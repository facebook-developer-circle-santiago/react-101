import React from 'react'
import './Tweet.scss'

const Tweet = () => {
  return (
    <div className="tweet-container">
      <div className="tweet">
        <div className="tweet-image">
          <img src="http://placehold.it/100/100" alt="Tweet pic" />
        </div>
        <div className="tweet-content">
          <div className="tweet-line">
            <strong>Username</strong>
            <small>13m</small>
          </div>
          <div className="tweet-line">
            Sigue su recuperación: jugador de Chapecoense Helio Neto vuelve a
            caminar tras accidente.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
