import React, { PropTypes } from 'react'

const Tweet = ({ name, username, tweetText }) => (
  <div className="tweet">
    <div className="name">{name}</div>
    <div className="username">{username}</div>
    <div className="tweetText">{tweetText}</div>
  </div>
)

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tweetText: PropTypes.string.isRequired,
}
export default Tweet
