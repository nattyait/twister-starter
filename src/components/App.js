import React from 'react'
import TweetList from './TweetList'

const tweets = [
  { id: 0, name: 'Nattacha', username: 'nattyait', tweetText: 'Hi' },
  { id: 1, name: 'Hello', username: 'natty', tweetText: 'Hi' },
]

const App = () => (
  <TweetList tweets={tweets} />
)

export default App
