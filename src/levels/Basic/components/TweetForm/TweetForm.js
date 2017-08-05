import React, { Component } from 'react'
import './TweetForm.scss'

const TweetForm = () => {
  return (
    <div className="tweet-form">
      <textarea className="tweet-text" placeholder="What's up?" />
      <div className="tweet-form-actions">
        <div className="btn btn-primary icon-button">
          <span className="glyphicon glyphicon-pencil" />
          Tweet
        </div>
      </div>
    </div>
  )
}

export default TweetForm
