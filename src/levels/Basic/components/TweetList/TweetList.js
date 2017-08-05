import React, { Component } from 'react'
import Tweet from '../Tweet'
import './TweetList.scss'

const TweetList = () => {
  return (
    <div className="tweet-list">
      <Tweet />
      <Tweet />
    </div>
  )
}

export default TweetList
