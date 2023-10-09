import React from "react";
import MyPosts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/Profileinfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} 
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText} />
        </div>
    )
}

export default Profile;