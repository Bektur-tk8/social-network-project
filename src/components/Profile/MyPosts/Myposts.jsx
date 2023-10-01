import React from "react";
import s from '../MyPosts/Myposts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    // let postsData = [
    //     {id:1, message: 'Hi, how are you?', likesCount: 12},
    //     {id:2, message: 'its me first post', likesCount: 2}
    // ]
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {/* <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} /> */}
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;