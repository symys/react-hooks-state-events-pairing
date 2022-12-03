import React, {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import Votes from "./Votes.js";

//const emoji = require("emoji-dictionary");

function App() {
  //console.log("Here's your data:", video);
  const [clicked, setComments] = useState(true)

 const handleHiddenClick = event => {
    setComments(current => !current)
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Votes upVote={video.upvotes} downVote={video.downvotes}/>
      <button onClick={handleHiddenClick}>Hide Comments</button>
      {clicked && <Comments comments={video.comments}/>}
    </div>
  );
}

export default App;
