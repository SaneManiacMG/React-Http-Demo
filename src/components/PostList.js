import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
                setError("Error retrieving data");
            });
    }, []);

    return (
        <div>
            List of posts
            {posts.length
                ? posts.map((post) => <div key={post.id}>{post.title}</div>)
                : null}
            {error ? <div>{error}</div> : null}
        </div>
    );
}

export default PostList;
