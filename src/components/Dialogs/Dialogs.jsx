import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} />
        )
    })
 
    let messageElements = props.messageData.map(m => <Message message={m.message} />)

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.messageChange(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div><textarea onChange={onMessageChange} value={props.newMessageBody}></textarea></div>
                <div><button onClick={onAddMessage}>send message</button></div>
            </div>
        </div>
    )
};

export default Dialogs;