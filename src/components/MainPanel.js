import React, { Component } from 'react'
import TweetList from './TweetList'
import NewTweet from './NewTweet'
import config from '../config'

class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Nattanicha',
      username: 'nattyait',
      tweets: [],
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }
  componentDidMount() {
    const uri = `http://${config.api.host}:${config.api.port}/api/tweets`
    const filter = `{"where":{"username":"${this.state.username}"}}`

    fetch(`${uri}?filter=${filter}`, {
      mode: 'cors',
    })
      .then(response => response.json())
      .then((tweets) => {
        this.setState({
          tweets, // tweets: tweets
        })
      })
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
