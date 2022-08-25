import React from 'react';
import { useState, useEffect } from 'react';
import './BackpackPage.css'
import ItemsList from "../components/ItemsList"
import Header from "../components/Header"
import apiService from '../services/api.service';

const BackpackPage = () => {
    const [items, setItems] = useState([])

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
            <div>
                <div className='ItemsList'>
                    <ItemsList items={items} />
                </div>
            </div>
        </div>
    )
}

export default BackpackPage