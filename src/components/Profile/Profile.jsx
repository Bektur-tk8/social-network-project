import React from "react";
import MyPosts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/Profileinfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} 
                     updateNewPostText = {props.updateNewPostText} 
                     addPost={props.addPost}
                     newPostText={props.state.newPostText} />
        </div>
    )
}

export default Profile;