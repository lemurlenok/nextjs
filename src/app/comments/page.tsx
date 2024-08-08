import React from 'react';
import {getAllComments, getAllPosts} from "@/services/api.service";
import Link from "next/link";

const CommentsPage = async () => {
    let allComments = await getAllComments()

    return (
        <div>
            <ul>
                {allComments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>)

        </div>
    );
};

export default CommentsPage;