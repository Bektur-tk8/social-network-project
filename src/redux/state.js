const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'its me first post', likesCount: 2 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Kroos' },
                { id: 2, name: 'Modric' },
                { id: 3, name: 'Bellingham' },
                { id: 4, name: 'Rudiger' },
                { id: 5, name: 'Carvajal' }
            ],

            messageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'how are you?' },
                { id: 3, message: 'Great!' },
                { id: 4, message: 'React' },
                { id: 5, message: 'Yo' }
            ]
        }
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
  

    dispatch(action) {
        if (action.type === ADD_POST ) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT ) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }



}

export const addPostActionCreator = () => ({type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text

})


export default store;






