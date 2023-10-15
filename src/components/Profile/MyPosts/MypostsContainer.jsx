import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./Myposts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {

//     let state = props.store.getState().profilePage;

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
       
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }

//     return <MyPosts updateNewPostText = {onPostChange} 
//                     addPost = {addPost} 
//                     postsData = {state.postsData}  
//                     newPostText = {state.newPostText}
//                     />

// }


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
return {
    addPost: () => {
        dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    }
}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;