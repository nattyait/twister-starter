import React, { PropTypes } from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'

const BodyContainer = ({ ownerUsername, enableTweet }) => (
  <div className="container body">
    <div className="left-panel">
      <Profile
        name="Nattanicha"
        username={ownerUsername}
        numTweets={123}
        numFollowers={123}
        numFollowings={123}
        isFollowing
        isOwnProfile
        handleToggleFollow={() => { console.log('toggle!!!!') }}
      />
    </div>
    <MainPanel enableTweet={enableTweet} />
  </div>
)

export default BodyContainer

BodyContainer.propTypes = {
  ownerUsername: PropTypes.string.isRequired,
  enableTweet: PropTypes.bool.isRequired,
}
