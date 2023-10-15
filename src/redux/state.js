import profileReducer from "./profile-reducer";

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
            ],
            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = profileReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }



}





export default store;






