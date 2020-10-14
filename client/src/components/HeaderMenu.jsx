import React, { useState } from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from "react-router.dom"

const HeaderMenu = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/"><img src="" alt="logo_brand"/></Link>
                    </li>
                    <li>
                        <Link to="/all_article">Toutes les annonces</Link>
                    </li>
                    <li>
                        <Link to="/all_shops">Boutiques</Link>
                    </li>
                </ul>
            </div>
            
        </Router>
    )
}


export default HeaderMenu;