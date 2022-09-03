import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";
import apiService from '../services/api.service';
import './CharacterInfo.css'



const CharacterInfo = (props) => {
    const [userInfo, setUserInfo] = useState([])
    const { update } = useContext(AuthContext);

    useEffect(() => {
        const fetchCharInfo = async () => {
            const charData = await apiService.getCharInfo()
            setUserInfo(charData)
        }
        fetchCharInfo()
    }, [update])

    return (
        <div className='CharInfo'>
            <div className="charInfoBox">
            <img className="profilePic" src={userInfo.profilePicture} alt="User" />
                <h1 className="userName">{userInfo.name}</h1>
                <h1 className="hpBar">HP: {userInfo.healthPoints} / {userInfo.healthPoints}</h1>
                <h1 className="mpBar">MP: {userInfo.staminaPoints} / {userInfo.staminaPoints}</h1>
                <h2>EXP: {userInfo.experiencePoints} / 200</h2>
                <h2 className="goldCoins">Gold: {userInfo.userMoney} <img src="https://res.cloudinary.com/sanxcloud/image/upload/v1661995416/profilePictures/pngegg_u3nfhq.png" alt="coins" /></h2>
            </div>
           
        </div>
    )
}

export default CharacterInfo