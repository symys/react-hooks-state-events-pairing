import React, {useState} from 'react'

function Votes({upVote, downVote}) {
    const [upper, setUpperVote] = useState(upVote)
    const [down, setDownVote] = useState(downVote)
    function handleUpVote(){
        setUpperVote(upper + 1)
    }

    function handleDownVote(){
        setDownVote(down + 1)
    }

  return (
    <div>
        <button onClick={handleUpVote}>{upper} 👍</button>
      <button onClick={handleDownVote}>{down} 👎</button>
    </div>
  )
}

export default Votes