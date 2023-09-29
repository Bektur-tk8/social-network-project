import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Kroos' },
        { id: 2, name: 'Modric' },
        { id: 3, name: 'Bellingham' },
        { id: 4, name: 'Rudiger' },
        { id: 5, name: 'Carvajal' }
    ]



    let dialogsElements = dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} />
        )
    })

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'how are you?' },
        { id: 3, message: 'Great!' },
        { id: 4, message: 'React' },
        { id: 5, message: 'Yo' }
    ]

    let messageElements = messageData.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;