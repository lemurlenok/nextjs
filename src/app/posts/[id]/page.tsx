import React from 'react';


const CommentPage = ({searchParams}: any) => {
    let comment = JSON.parse(searchParams.data);
    return (
        <div>
            <h1>{comment.postId}</h1>
            <p><strong>ID:</strong> {comment.id}</p>
            <p><strong>body:</strong> {comment.body}</p>

        </div>
    );
};

export default CommentPage;