import React from 'react';
import { useState, useEffect } from 'react';
import './StorePage.css'
import ItemsList from '../components/ItemsList';
import Header from '../components/Header';
//import SearchBar from "../components/SearchBar"
import CharacterInfo from '../components/CharacterInfo';
import apiService from '../services/api.service';

const StorePage = () => {
    const [items, setItems] = useState([])
    const operation = "Buy"
    

    useEffect(() => {
        const fetchItems = async () => {
            const itemsData = await apiService.getItems()
            setItems(itemsData)
        }
        fetchItems()
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container'>

                <ItemsList  operation={operation} items={items} />
                <CharacterInfo />

            </div>

        </div>

    )
}

export default StorePage