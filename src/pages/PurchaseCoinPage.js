import { Howl } from "howler"
import Swal from 'sweetalert2'
import React, { useState } from "react"
import Header from "../components/Header"
import MessageBox from "../components/MessageBox"
import apiService from "../services/api.service"
import './PurchaseCoinPage.css'

const PurchaseCoinPage = () => {
    const [rightAnswer, setRightAnswer] = useState('=')
    const [state, setState] = useState('')
    const [message, setMessage] = useState("Let's play a game. Click on 'Riddle' button to load a riddle.  If you win I'll pay you some gold")
    const mockRiddles = [
        {
            riddle: "What has to be broken before you can use it?",
            answer: "an egg"
        },
        {
            riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
            answer: "a candle"
        },
        {
            riddle: "What is full of holes but still holds water?",
            answer: "a sponge"
        }
    ]

    const goldSound = new Howl({
        src: ['https://res.cloudinary.com/sanxcloud/video/upload/v1661982200/profilePictures/mixkit-coins-handling-1939_ss8xzp.wav']
    });

    const riddleSolvedAlert = () => {
        Swal.fire({
            title: `The Riddle was solved! 
            You won 200 Gold`,
            width: 600,
            padding: '4em',
            color: '#fff',
            background: '#D4AF37 url(https://res.cloudinary.com/sanxcloud/image/upload/v1661879396/profilePictures/3a05faad64800e1cce421f4c013b1bc4_pi9zpj.gif)',
            backdrop: 'rgba(0,0,120,0.3)'
        })
    }

    function riddleFunc() {
        const randomNum = Math.floor(Math.random() * 3);
        setMessage(mockRiddles[randomNum].riddle)
        setRightAnswer(mockRiddles[randomNum].answer)
    }

    function handleChange(e) {
        setState(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(state)
        if ( state === rightAnswer) {
            await apiService.addRiddleGold()
            goldSound.play()
            riddleSolvedAlert()
            setState('')
        }
    }


    return (
        <div>
            <Header />

            <form className="RiddleForm" onSubmit={handleSubmit}>
                <div>
                    <div className='Label'>
                        <input
                            type="text"
                            name='answer'
                            placeholder="Answer"
                            value={state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='RiddleButtons'>
                        <button onClick={riddleFunc}>?</button>
                        <button type='submit'>
                            →
                        </button>
                    </div>
                </div>
            </form>
            <MessageBox message={message} rightAnswer={rightAnswer} />
            
        </div>
    )
}

export default PurchaseCoinPage