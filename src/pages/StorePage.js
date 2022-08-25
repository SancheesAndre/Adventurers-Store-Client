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
                <div>
                    <div className='ItemsList'>
                        <ItemsList items={items} />
                    </div>
                </div>
                <div>
                </div>
                    {<CharacterInfo />}
            </div>

        </div>

    )
}

export default StorePage