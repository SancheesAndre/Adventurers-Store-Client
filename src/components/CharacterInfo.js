import React from 'react';
import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import './CharacterInfo.css'

const CharacterInfo = () => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        const fetchCharInfo = async () => {
            const charData = await apiService.getCharInfo()
            setUserInfo(charData)
        }
        fetchCharInfo()
        
    }, [])

    return (
        <div className='CharInfo'>
            <h1>{userInfo.name}</h1>
            <img src={userInfo.profilePicture} alt="" />
            <h1>{userInfo.healthPoints}</h1>
            <h1>{userInfo.staminaPoints}</h1>
            <h2>{userInfo.experiencePoints}</h2>
            <h2>{userInfo.userMoney}</h2>
                    
        </div>
    )
}

export default CharacterInfo