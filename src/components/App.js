import React from 'react'
import TweetList from './TweetList'
import NewTweet from './NewTweet'

const tweets = [
  { id: 0, name: 'Nattacha', username: 'nattyait', tweetText: 'Hi' },
  { id: 1, name: 'Hello', username: 'natty', tweetText: 'Hi' },
]

const App = () => (
  <div>
    <NewTweet />
    <TweetList tweets={tweets} />
  </div>
)

export default App
