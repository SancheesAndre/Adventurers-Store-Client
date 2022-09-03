import React, { useContext } from "react"
import { AuthContext } from ".././contexts/authContext";
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const clearStorage = () => {
        localStorage.clear()
        navigate("/");
        document.location.reload(true)
    }

    if (!authContext.loggedInUser.user._id) {
        return (
            <div>
                <nav>

                    <h1 className="logo">Adventurer's Store</h1>

                    <div className='menu'>
                        <ul> 
                            <li>
                                <Link to={'/'}>Login</Link>
                            </li>
                            <li>
                                <Link to={'/auth/signup'}>Register</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    } if (authContext.loggedInUser.user._id){
        return (
            <div>
                <nav>

                    <h1 className="logo">Adventurer's Store</h1>

                    <div className='menu'>
                        <ul>
                            <li>
                                <Link to={'/storepage'}>Store</Link>
                            </li>
                            <li>
                                <Link to={'/backpackpage'}>Backpack</Link>
                            </li>
                            <li>
                                <Link to={'/purchasecoinpage'}>Claim Gold</Link>
                            </li>
                            <li>
                                <button className="logoutButton" onClick={clearStorage}>Logout</button>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }

    
}

export default Header