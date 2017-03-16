import React, { PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

const Profile = ({
  name, username, numTweets,
  numFollowers, numFollowings,
  isFollowing, isOwnProfile, handleToggleFollow,
  }) => (
    <div className="profile">
      <ProfileHeader
        name={name}
        username={username}
      />
      <ProfileDetail
        numTweets={numTweets}
        numFollowers={numFollowers}
        numFollowings={numFollowings}
      />
      { isOwnProfile
      ? null
      : <ProfileFollow
        isFollowing={isFollowing}
        handleToggleFollow={handleToggleFollow}
      /> }
    </div>
  )

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  numFollowings: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
  handleToggleFollow: PropTypes.func.isRequired,
}

export default Profile
