import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './BackpackPage.css'
import BackpackItemsList from "../components/BackpackItemsList"
import Header from "../components/Header"

const mockItems = [
    {
        name: "Rusted Sword",
        image: "https://res.cloudinary.com/sanxcloud/image/upload/v1660786908/profilePictures/vw1hr3hulxepz2cx2vbv.png",
        type: "Weapon",
        price: "40",
        iteration: "20",
        description: "Deals 20 Damage"
    },
    {
        name: "Rusted Sword",
        image: "https://res.cloudinary.com/sanxcloud/image/upload/v1660786908/profilePictures/vw1hr3hulxepz2cx2vbv.png",
        type: "Weapon",
        price: "40",
        iteration: "20",
        description: "Deals 20 Damage"
    },
    {
        name: "Rusted Sword",
        image: "https://res.cloudinary.com/sanxcloud/image/upload/v1660786908/profilePictures/vw1hr3hulxepz2cx2vbv.png",
        type: "Weapon",
        price: "40",
        iteration: "20",
        description: "Deals 20 Damage"
    },
    {
        name: "Rusted Sword",
        image: "https://res.cloudinary.com/sanxcloud/image/upload/v1660786908/profilePictures/vw1hr3hulxepz2cx2vbv.png",
        type: "Weapon",
        price: "40",
        iteration: "20",
        description: "Deals 20 Damage"
    }
]

const BackpackPage = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <div className='ItemsList'>
                    <BackpackItemsList items={mockItems} />
                </div>
            </div>
        </div>
    )
}

export default BackpackPage