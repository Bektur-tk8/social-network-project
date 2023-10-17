import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


// const DialogsContainer = (props) => {

//     let state = props.store.getState().dialogsPage;

//     let addMessage = () => {
//         props.store.dispatch(sendMessageCreator())
//     }

//     let messageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
    

//     return <Dialogs addMessage = {addMessage} 
//                     messageChange = {messageChange} 
//                     dialogsData = {state.dialogsData} 
//                     messageData = {state.messageData} 
//                     newMessageBody = {state.newMessageBody} />
// };

// export default DialogsContainer;


//mapStateTorpops, mapDispatchToProps

let mapStateToProps = (state) => {
        return {
            dialogsData: state.dialogsPage.dialogsData,
            messageData: state.dialogsPage.messageData,
            newMessageBody: state.dialogsPage.newMessageBody
        }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageCreator())
        },
        messageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;