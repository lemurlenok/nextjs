import React from 'react';
import {getAllPosts} from "@/services/api.service";
import Link from "next/link";

const PostsPage = async () => {
    let allPosts = await getAllPosts()

    return (
        <div>
            <ul>

                {
                    allPosts.map(value => <li key={value.id}>
                        <Link href={{pathname: '/posts/' + value.id,
                            query: {data: JSON.stringify(value)}}}>
                            <h3>{value.title}</h3></Link>
                            <p>{value.body}</p>
                    </li>)


                }
            </ul>
        </div>
    );
};

export default PostsPage;