import React from 'react';
import { useState, useEffect } from 'react';
import './BackpackPage.css'
import ItemsList from "../components/ItemsList"
import Header from "../components/Header"
import apiService from '../services/api.service';
import CharacterInfo from '../components/CharacterInfo';

const BackpackPage = () => {
    const [items, setItems] = useState([])
    const operation = "Sell"

    useEffect(() => {
        const fetchBackpack = async () => {
            const itemsData = await apiService.backpack()
            setItems(itemsData)
        }
        fetchBackpack()
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container'>
                <div>
                    <ItemsList operation={operation} items={items} />
                </div>
                <CharacterInfo />
            </div>

        </div>
    )
}

export default BackpackPage