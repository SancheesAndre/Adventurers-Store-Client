import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import ItemsList from '../components/ItemsList';
import './StorePage.css'
import Header from '../components/Header';

const StorePage = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3400/api/items')
            .then(response => {
                setItems(response.data)
            })
            .catch(error => console.log(error))
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

export default StorePage