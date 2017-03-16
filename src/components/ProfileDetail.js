import React, { PropTypes } from 'react'

const ProfileDetail = ({ newTweets, numFollowers, numFollowings }) => (
  <div className="detail last-section">
    <div className="col">
      <div className="text">Tweets</div>
      <div className="number">{newTweets}</div>
    </div>
    <div className="col">
      <div className="text">Followers</div>
      <div className="number">{numFollowers}</div>
    </div>
    <div className="col">
      <div className="text">Following</div>
      <div className="number">{numFollowings}</div>
    </div>
  </div>
)

ProfileDetail.propTypes = {
  newTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequire,
  numFollowings: PropTypes.number.isRequire,
}

export default ProfileDetail
