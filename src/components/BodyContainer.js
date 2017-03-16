import React, { Component, PropTypes } from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'
// import config from '../config'
import { fetchTweets, fetchProfile, fetchFollowStatus } from '../helpers'

class BodyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'nattyait',
      tweets: [],
      numFollowers: 0,
      numFollowings: 0,
      isFollowing: false,
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }
  componentDidMount() {
  /*
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
  */
    const fetchedData = {}
    const ownerUsername = this.props.ownerUsername || this.state.username
    fetchTweets(ownerUsername)
    .then((tweets) => { fetchedData.tweets = tweets })
    .then(() => fetchProfile(ownerUsername))
    .then((profile) => {
      fetchedData.numFollowers = profile.numFollowers
      fetchedData.numFollowings = profile.numFollowings
    })
    .then(() => fetchFollowStatus(this.state.username, ownerUsername))
    .then((status) => {
      fetchedData.isFollowing = status
      this.setState(fetchedData)
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
    const ownerUsername = this.props.ownerUsername || this.state.username
    const isOwnProfile = this.state.username === ownerUsername
    return (
      <div className="container body">
        <div className="left-panel">
          <Profile
            {...this.state}
            name="Nattanicha"
            username={this.props.ownerUsername}
            numTweets={123}
            isFollowing
            isOwnProfile={isOwnProfile}
            handleToggleFollow={() => { console.log('toggle!!!!') }}
          />
        </div>
        <MainPanel
          enableTweet={this.props.enableTweet}
          name={name}
          username={username}
          tweets={tweets}
          addToTweetList={this.addToTweetList}
        />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  ownerUsername: PropTypes.string.isRequired,
  enableTweet: PropTypes.bool.isRequired,
}

export default BodyContainer

