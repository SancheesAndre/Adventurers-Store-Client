import React, { useState, useContext, useEffect } from "react"
import { AuthContext } from "../contexts/authContext";
import { Howl } from 'howler';
import Swal from 'sweetalert2'
import apiService from '../services/api.service';
import './ItemCard.css'

const ItemCard = (props) => {
    const [userInfo, setUserInfo] = useState([])
    const { update, setUpdate } = useContext(AuthContext);
    const { operation, id, name, image, description } = props
    let { price } = props

    if (operation === "Sell") {
        price = price / 2
    }

    useEffect(() => {
        const fetchCharInfo = async () => {
            const charData = await apiService.getCharInfo()
            setUserInfo(charData)
        }
        fetchCharInfo()
    }, [update])

    const buyItemSound = new Howl({
        src: ['https://res.cloudinary.com/sanxcloud/video/upload/v1661982350/profilePictures/mixkit-clinking-coins-1993_qc3yt3.wav']
    });

    const sellItemSound = new Howl({
        src: ['https://res.cloudinary.com/sanxcloud/video/upload/v1661982200/profilePictures/mixkit-coins-handling-1939_ss8xzp.wav']
    });

    const refusePurcheseSound = new Howl({
        src: ['https://res.cloudinary.com/sanxcloud/video/upload/v1662064773/profilePictures/spring_ufwfsi.mp3']
    });

    const buyItemAlert = () => {
        Swal.fire({
            title: 'The item has been PURCHASED!',
            width: 600,
            padding: '4em',
            color: '#fff',
            background: '#D4AF37 url(https://res.cloudinary.com/sanxcloud/image/upload/v1661879396/profilePictures/3a05faad64800e1cce421f4c013b1bc4_pi9zpj.gif)',
            backdrop: 'rgba(0,0,120,0.3)'
        })
    }

    const sellItemAlert = () => {
        Swal.fire({
            title: 'The item has been SOLD!',
            width: 600,
            padding: '4em',
            color: '#fff',
            background: '#D4AF37 url(https://res.cloudinary.com/sanxcloud/image/upload/v1661879396/profilePictures/3a05faad64800e1cce421f4c013b1bc4_pi9zpj.gif)',
            backdrop: 'rgba(0,0,120,0.3)'
        })
    }

    const refusePurchaseAlert = () => {
        Swal.fire({
            title: "Not enough Gold",
            width: 600,
            padding: '4em',
            color: '#fff',
            background: '#D4AF37 url(https://res.cloudinary.com/sanxcloud/image/upload/v1661879396/profilePictures/3a05faad64800e1cce421f4c013b1bc4_pi9zpj.gif)',
            backdrop: 'rgba(0,0,120,0.3)'
        })
    }

    function changeUpdate() {
        if (update === true) {
            setUpdate(false)
        }
        if (update === false) {
            setUpdate(true)
        }
    }


    const operationFunc = async () => {
        if (operation === "Buy") {
            if (userInfo.userMoney < price) {
                refusePurcheseSound.play()
                refusePurchaseAlert()
            } else {
                await apiService.purchaseItem(id)
                await apiService.subtractGold(id)
                buyItemSound.play()
                changeUpdate()
                buyItemAlert()
            }
        }
        if (operation === "Sell") {
            await apiService.sellItem(id)
            await apiService.addGold(id)
            sellItemSound.play()
            changeUpdate()
            sellItemAlert()
        }
    }

    return (
        <div className="item">
            <img src={image} className="itemImg" alt="item" />
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="priceBox">
                <img className="coinImg" src="https://res.cloudinary.com/sanxcloud/image/upload/v1661995416/profilePictures/pngegg_u3nfhq.png" alt="Coin" />
                <p>{price}</p>
                <button onClick={operationFunc}>{operation}</button>
            </div>

        </div>
    )
}

export default ItemCard