// Tweet.js
import React, { useState } from 'react';

function Tweet({ username, content, likes, timestamp }) {
    
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(likes)

    function handleLike() {
        if (liked) {
            setLiked(false)
            setLikeCount(likeCount - 1)
        } else {
            setLiked(true)
            setLikeCount(likeCount + 1)
        }
    }

    return (
        <div className="tweet">
            <h3>@{username}</h3>
            <p>{content}</p>
            <p>{timestamp}</p>
            <button onClick={handleLike}>{liked ? '❤️' : '🤍'}{likeCount}</button>
        </div>
    )


}



export default Tweet;
