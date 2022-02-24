import { useState} from "react";
import { Tweet } from "./components/Tweet"

function App() {
const [tweets, setTweets]  = useState<string[]>([
  'Tweet 1',
  'Tweet 2',
  'Tweet 3',
  'Tweet 4',
])

function createTweets(){
  setTweets([...tweets, 'twitewewas'])
}

return (

  <div>
  {tweets.map(tweet => {
    return <Tweet text={tweet} />
  })}

  <button onClick={createTweets}>Adicionar Tweet</button>
  </div>
  );
}

export default App
