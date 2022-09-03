import React from "react";
import './MessageBox.css'

const MessageBox = (props) => {
    const { rightAnswer,  message } = props

    return (
        <div className="Container">
            <img className="MsgBoxPicture" src="https://res.cloudinary.com/sanxcloud/image/upload/v1660753513/profilePictures/vmxxj05vzm1djxggcmge.png" alt="Dark Kig" />
            <div className="MessageBox">
                <p>{message}</p>
                <p className="answer">{rightAnswer}</p>
            </div>
        </div>
    )
}

export default MessageBox