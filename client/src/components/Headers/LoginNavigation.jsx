import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const LoginNavigation = () => {
    return (
            <div>
                <ul>
                    <li>
                        <Link to="/login">Connecter Vous</Link>
                    </li>
                    <li>
                        <Link to="/post_article">Publiez un article</Link>
                    </li>
                </ul>
            </div>
    )   
}

export default LoginNavigation