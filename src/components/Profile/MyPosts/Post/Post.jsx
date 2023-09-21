import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef.jpg" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;