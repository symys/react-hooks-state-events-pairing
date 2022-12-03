import React from 'react'


function Comments({comments}) {
    const allComments = comments.map((comment) => {
       return <div> 
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
        </div>
    })
  return (
    <div>
        <h3>{comments.length} Comments</h3>
        {allComments}
    </div>
  )
}

export default Comments