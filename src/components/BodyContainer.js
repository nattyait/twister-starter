import React, { Component, PropTypes } from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'
// import config from '../config'
import { fetchTweets, fetchProfile, fetchFollowStatus } from '../helpers'

class BodyContainer extends Component {
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
    fetchTweets(this.props.ownerUsername)
    .then((tweets) => { fetchedData.tweets = tweets })
    .then(() => fetchProfile(this.props.ownerUsername))
    .then((profile) => { fetchedData.numFollowers = profile.numFollowers })
    .then(() => fetchFollowStatus(this.state.username, this.props.ownerUsername))
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
    return (
      <div className="container body">
        <div className="left-panel">
          <Profile
            name="Nattanicha"
            username={this.props.ownerUsername}
            numTweets={123}
            numFollowers={123}
            numFollowings={123}
            isFollowing
            isOwnProfile
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

