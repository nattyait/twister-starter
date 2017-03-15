import React, { Component } from 'react'
import TweetList from './TweetList'
import NewTweet from './NewTweet'

class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Nattanicha',
      username: 'nattyait',
      tweets: [
        { id: 0, name: 'Nattacha', username: 'nattyait', tweetText: 'Hi' },
        { id: 1, name: 'Hello', username: 'natty', tweetText: 'Hi' },
      ],
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }
  addToTweetList(tweet) {
    const tweetWithId = tweet
    tweetWithId.id = this.state.tweets.length

    this.setState({
      tweets: [
        ...this.state.tweets,
        tweetWithId,
      ],
    })
  }

  render() {
    const { name, username, tweets } = this.state

    return (
      <div className="main-panel">
        <NewTweet
          name={name}
          username={username}
          addToTweetList={this.addToTweetList}
        />
        <TweetList tweets={tweets} />
      </div>
    )
  }
}
export default MainPanel
