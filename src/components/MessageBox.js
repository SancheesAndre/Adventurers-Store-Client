import React from "react";
import './MessageBox.css'

const MessageBox = (props) => {
    const { message } = props

    return (
        <div className="Container">
            <img className="MsgBoxPicture" src="https://res.cloudinary.com/sanxcloud/image/upload/v1660753513/profilePictures/vmxxj05vzm1djxggcmge.png" alt="Dark Kig" />
            <div className="MessageBox">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default MessageBox