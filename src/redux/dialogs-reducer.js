const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        
        case SEND_MESSAGE:
            let body =  state.newMessageBody;
            state.newMessageBody = ''
            state.messageData.push({id:6, message: body})
            return state;
        default:
            return state;
    }
   
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body})

export default dialogsReducer;