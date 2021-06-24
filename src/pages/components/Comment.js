import React from 'react'

export default function Comment({comment}) {
    return (
        <div className="individual-comment">
            {comment.content}
        </div>
    )
}
