import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import './BackpackPage.css'
import ItemsList from "../components/ItemsList"
import Header from "../components/Header"
import apiService from '../services/api.service';
import CharacterInfo from '../components/CharacterInfo';


const BackpackPage = () => {
    const [items, setItems] = useState([])
    const operation = "Sell"
    const { update } = useContext(AuthContext);

    useEffect(() => {
        const fetchBackpack = async () => {
            const itemsData = await apiService.backpack()
            setItems(itemsData)
            
        }
        fetchBackpack()
    }, [update])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container'>
                <div className='backpackItems'>
                    <ItemsList operation={operation} items={items} />
                </div>
                <CharacterInfo />
            </div>

        </div>
    )
}

export default BackpackPage