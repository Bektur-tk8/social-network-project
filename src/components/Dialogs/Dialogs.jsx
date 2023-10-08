import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} />
        )
    })

    

    let messageElements = props.state.messageData.map(m => <Message message={m.message} />)

    let newMessageElem = React.createRef();

    let onAddMessage = () => {
        let text = newMessageElem.current.value;
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea ref={newMessageElem}></textarea>
                <button onClick={onAddMessage}>send message</button>
            </div>
        </div>
    )
};

export default Dialogs;