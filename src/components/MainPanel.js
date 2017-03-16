import React, { PropTypes } from 'react'
import TweetList from './TweetList'
import NewTweet from './NewTweet'

const MainPanel = ({ name, username, tweets, enableTweet, addToTweetList }) => (
  <div className="main-panel">
    { enableTweet
    ? <NewTweet
      name={name}
      username={username}
      addToTweetList={addToTweetList}
    />
    : null }
    <TweetList tweets={tweets} />
  </div>
)

MainPanel.propTypes = {
  enableTweet: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToTweetList: PropTypes.func.isRequired,
}
export default MainPanel
