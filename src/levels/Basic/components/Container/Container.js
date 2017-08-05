import React from 'react'

import TweetForm from '../TweetForm'
import TweetList from '../TweetList'
import './Container.scss'

const TwitterContainer = () => {
  return (
    <div className="twitter-container">
      <TweetForm />
      <TweetList />
    </div>
  )
}

export default TwitterContainer
