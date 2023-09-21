import React from "react";
import s from '../MyPosts/Myposts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message='hi, how are you?' likesCount = '0' />
                    <Post message = 'its my first post' likesCount = '20' />
                    
                </div>

            </div>
        </div>
    )
}

export default MyPosts;