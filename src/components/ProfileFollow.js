import React, { PropTypes } from 'react'

const ProfileFollow = ({ isFollowing, handleToggleFollow }) => (
  <div className="action last-section">
    {
      isFollowing
        ? <input onClick={handleToggleFollow} type="button" className="btn btn-danger btn-lg" value="UnFollow" />
        : <input onClick={handleToggleFollow} type="button" className="btn btn-default btn-lg" value="Follow" />
    }
  </div>
)
ProfileFollow.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  handleToggleFollow: PropTypes.string.isRequired,
}

export default ProfileFollow
