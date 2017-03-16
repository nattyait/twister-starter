import React from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'

const App = () => (
  <div>
    <Profile
      name="Nattanicha"
      username="nattyait"
      numTweets={123}
      numFollowers={123}
      numFollowings={123}
      isFollowing
      isOwnProfile
      handleToggleFollow={() => { console.log('toggle!!!!') }}
    />
    <MainPanel enableTweet />
  </div>
)

export default App
