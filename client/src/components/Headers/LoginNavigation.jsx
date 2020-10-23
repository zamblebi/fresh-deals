import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import profil from './icons/profil.svg'
import cart from './icons/cart.svg'
// import css 
import './Header.css'

const LoginNavigation = () => {
    return (
            <div>
                <ul className="right_header_section">
                    <li>
                        <Link to="/login"><img className="profil_icon" src={profil} alt=""/></Link>
                    </li>
                    <li>
                        <Link to="/post_article"><img className="cart_icon" src={cart} alt=""/></Link>
                    </li>
                </ul>
            </div>
    )   
}

export default LoginNavigation