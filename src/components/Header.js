import React from "react"
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to={'/'} className='logo'>
                <h1>Adventurer's Store</h1>
            </Link>
            <div className='menu'>
                <ul>
                    <li>
                        <Link to={'/storepage'}>Store</Link>
                    </li>
                    <li>
                        <Link to={'/backpackpage'}>Backpack</Link>
                    </li>
                    <li>
                        <Link to={'/signout'}>Sign out</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Header